import { useContext } from "react"
import { Col, Row, Card, Image } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"
import BookmarkCard from "../components/BookmarkCard"
import MyArticls from "../components/MyArticls"
import LocalCard from "../components/LocalCard"

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
        <Col>
          <Card className="profilearicals">
            <p style={{ textAlign: "center", fontSize: "3em", color: "white" }}>My Articals</p>
            {userArticals.map(localItem => (
              <LocalCard localItem={localItem} inProfile={true} />
            ))}
          </Card>
        </Col>

        <Col className="bookMarks" md={5} className="ms-5">
          <Card className="profileCards">
            <p className="headlines">Book Marked news:</p>
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
