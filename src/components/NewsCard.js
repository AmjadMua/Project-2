import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { IconContext } from "react-icons"
import { FcBookmark } from "react-icons/fc"
import { useContext } from "react"
import NewsContext from "../utlis/Newsontext"
function NewsCard(props) {
  const { newItem } = props
  const newId = newItem.publishedAt
  const { addToBookmark } = useContext(NewsContext)

  return (
    <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: "70rem" }}>
        <Row>
          <Col md={4}>
            <Card.Img variant="top" src={newItem.urlToImage} />
          </Col>
          <Col md={7}>
            <Card.Body>
              <Card.Title>{newItem.title}</Card.Title>
              <Card.Text>{newItem.description}</Card.Text>
              <Link className="btn btn-primary" to={`/news/${newId}`}>
                Read more..
              </Link>
            </Card.Body>
          </Col>
          <Col>
            <IconContext.Provider value={{ size: "2.5em" }}>
              <div>
                <Link to="/" onClick={() => addToBookmark(newId)}>
                  <FcBookmark />
                </Link>
              </div>
            </IconContext.Provider>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default NewsCard
