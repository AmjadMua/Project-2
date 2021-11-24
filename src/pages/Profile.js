import { useContext } from "react"
import { Col, Row, Card, Image } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"
import BookmarkCard from "../components/BookmarkCard"
import LocalCard from "../components/LocalCard"
import { IconContext } from "react-icons"
import { BsPencilSquare } from "react-icons/bs"

function Profile() {
  const { profile, localNews, worldNews } = useContext(NewsContext)
  if (!profile) {
    return <h1>Loading...</h1>
  }

  const userArticals = localNews.filter(item => item._user._id === profile._id)
  const favourites = profile.favourite.map(fav => {
    const newsFound = worldNews.find(artical => artical.publishedAt == fav.url)
    const favourite = {
      _id: fav._id,
      ...newsFound,
    }
    return favourite
  })
  console.log("fav", favourites)

  // const bookmarkUrls = profile.favourite.map(bookmark => bookmark.url)
  // const bookmarkId = profile.favourite.map(bookmark => bookmark._id)
  // console.log("bookmark id before map", bookmarkId)

  // const publicNews = worldNews.filter(onenew => bookmarkUrls.includes(onenew.publishedAt))

  return (
    <div className="profilepage">
      <Row className="userInfo">
        <Image src={profile.photo} roundedCircle style={{ height: "200px", width: "210px" }} />
        <h3>
          {profile.firstName} {profile.lastName}
        </h3>
        <p style={{ color: "white" }}>{profile.email} </p>
      </Row>

      <Row className="userActivity">
        <Col style={{ height: "150%" }}>
          <Card className="profilearicals">
            <p style={{ textAlign: "center", fontSize: "2em", color: "black" }}>
              My Articals
              <IconContext.Provider value={{ size: "1em" }}>
                <BsPencilSquare />
              </IconContext.Provider>
            </p>
            {userArticals.map(localItem => (
              <LocalCard localItem={localItem} inProfile={true} />
            ))}
          </Card>
        </Col>

        <Col className="bookMarks" md={5} className="ms-5">
          <Card className="profileCards">
            <p style={{ textAlign: "center", fontSize: "2em", color: "black" }}>Book Marked news:</p>
            <Row md={1} className="m-3">
              {favourites.map(favourite => (
                <BookmarkCard favourite={favourite} />
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Profile
