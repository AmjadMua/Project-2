import { useContext } from "react"
import { Col, Row, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import NewsContext from "../utlis/Newsontext"
function BookmarkCard(props) {
  const { bookmark } = props
  
  const newId = bookmark.publishedAt
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <Card style={{ width: "70rem" }}>
          <Row>
            <Col md={4}>
              <Card.Img variant="top" src={bookmark.urlToImage} />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title>{bookmark.title}</Card.Title>
                <Link className="btn btn-primary" to={`/news/${newId}`}>
                  Read Now
                </Link>
                {/* <Button variant="danger" onClick={removeBookmark(bookmarkId)}>
                  {" "}
                  Remove{" "}
                </Button> */}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>{" "}
    </>
  )
}

export default BookmarkCard
