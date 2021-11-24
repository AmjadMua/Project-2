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
        <Col style={{ height: "100%" }}>
          <Card className="profilearicals" style={{ backgroundColor: "rgba(59, 59, 59, 0.842)" }}>
            <p style={{ textAlign: "center", fontSize: "2em", color: "white" }}>
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

        <Col className="bookMarks" md={5}>
          <Card className="profileCards" style={{ backgroundColor: "rgba(105, 1, 1, 0.705)" }}>
            <p style={{ textAlign: "center", fontSize: "2em", color: "white" }}>Book Marked news:</p>
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
