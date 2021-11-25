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
      <Card className="Card">
        <Row>
          <Card.Img variant="top" src={newItem.urlToImage} style={{ height: "200px", borderRradius: "15px" }} />
        </Row>
        <Card.Body>
          <Card.Title>{newItem.title}</Card.Title>
          <Card.Text>{newItem.description}</Card.Text>
          <Link className="btn btn-dark" to={`/news/${newId}`}>
            Read more..
          </Link>
          {localStorage.userToken ? (
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div>
                <Link to="/profile" className="btn btn-light mt-2" onClick={() => addToBookmark(newId)}>
                  Bookmark
                  <FcBookmark />
                </Link>
              </div>
            </IconContext.Provider>
          ) : null}
        </Card.Body>
      </Card>
    </div>
  )
}

export default NewsCard
