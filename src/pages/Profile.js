import { useContext } from "react"
import { Col, Row, Card, Image } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"
import LocalCard from "../components/LocalCard"
import BookmarkCard from "../components/BookmarkCard"

function Profile() {
  const { profile, localNews, bookmarks, worldNews } = useContext(NewsContext)

  if (!profile) {
    return <h1>Loading...</h1>
  }

  const userArticals = localNews.filter(item => item._user._id === profile._id)
  console.log(userArticals)

  const bookmarkUrls = profile.favourite.map(bookmark => bookmark.url)
  const bookmarkId = profile.favourite.map(bookmark => bookmark._id)
  console.log("bookmark id", bookmarkId)

  const publicNews = worldNews.filter(onenew => bookmarkUrls.includes(onenew.publishedAt))
  console.log(publicNews)
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
          <Card className="profileCards">
            <p className="headlines">My Articals</p>
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
              {publicNews.map(bookmark => (
                <BookmarkCard bookmark={bookmark} bookmarkId={bookmarkId} />
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Profile
