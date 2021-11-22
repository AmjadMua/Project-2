import { useContext } from "react"
import { Col, Row, Card, Image } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"
import styles from "../styles.module.css"
import LocalCard from "../components/LocalCard"
import BookmarkCard from "../components/BookmarkCard"

function Profile() {
  const { profile, localNews, bookmarks, worldNews } = useContext(NewsContext)

  if (!profile) {
    return <h1>Loading...</h1>
  }

  const userArticals = localNews.filter(item => item._user._id === profile._id)
  console.log(userArticals)

  // const bookmarkid = bookmarks.filter(bookmark => bookmark.url)
  // const publicNewsid = worldNews.filter(onenew => onenew.publishedAt)
  return (
    <div>
      <Row className="userInfo">
        <Row xs={6} md={4}>
          <Image
            src={profile.photo}
            roundedCircle
            style={{ height: "270px", marginLeft: "37%", marginTop: "3%", marginBottom: "1%" }}
          />
        </Row>
        <Row>
          <h4>
            {profile.firstName} {profile.lastName}
          </h4>
        </Row>
        <Row>
          <p>{profile.email} </p>
        </Row>
      </Row>

      <Row className="userActivity">
        <Col md={5} className="ms-5">
          <Card className={styles.profileCards}>
            <p className={styles.headlines}>My Articals</p>
            <Row md={1} className="m-2">
              {userArticals.map(localItem => (
                <LocalCard localItem={localItem} inProfile={true} />
              ))}
            </Row>
          </Card>
        </Col>

        <Col className="bookMarks" md={5} className="ms-5">
          <Card className={styles.profileCards}>
            <p className={styles.headlines}>Book Marked news:</p>
            <Row md={1} className="m-3">
              {bookmarks.map(bookmark => (
                <BookmarkCard bookmark={bookmark} />
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Profile
