import { useContext } from "react"
import { Col, Row, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import NewsContext from "../utlis/Newsontext"
function BookmarkCard(props) {
  const { favourite } = props
  const { removeBookmark } = useContext(NewsContext)

  const newId = favourite.publishedAt
  console.log("bookmark id after map", favourite, "title", favourite.title)
  return (
    <>
      <div className="bokmarkerea">
        <Card style={{ width: "50rem", height: "220px", justifyContent: "center" }}>
          <Row>
            <Col md={4}>
              <Card.Img variant="top" src={favourite.urlToImage} />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title>{favourite.title}</Card.Title>
                <Link className="graysbtns" to={`/news/${newId}`}>
                  Read Now
                </Link>
                <button className="redbtns" onClick={e => removeBookmark(e, favourite._id)}>
                  {" "}
                  Remove{" "}
                </button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>{" "}
    </>
  )
}

export default BookmarkCard
