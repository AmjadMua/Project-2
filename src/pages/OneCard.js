import { useContext } from "react"

import NewsContext from "../utlis/Newsontext"
import { Card, Row, Col } from "react-bootstrap"
import { useParams } from "react-router"

function OneCard() {
  const { newId } = useParams()
  const { worldNews } = useContext(NewsContext)

  const newsFound = worldNews.find(newItem => newItem.publishedAt === newId)
  if (!newsFound) {
    return <h5>Loading..</h5>
  }

  return (
    <div className="oneartical">
      <Card className="Card" style={{ width: "50rem" }}>
        <Col>
          <Card.Title className="title"> {newsFound.title}</Card.Title>
          <b style={{ color: "red", background: "rgba(241, 241, 241, 0.808)", padding: "5px" }}>
            Jotnaist : {newsFound.author}
          </b>
        </Col>
        <Col>
          <Card.Body>
            <img variant="top" src={newsFound.urlToImage} height="350px" width="350px" />
            <Card.Text className="descriptipn">
              {newsFound.description} <br /> <br /> Refrence : <a href={newsFound.url}>{newsFound.url}</a>
            </Card.Text>
          </Card.Body>
        </Col>
        <Row>
          <button className="backButton">
            {" "}
            <a href="/"> Home</a>
          </button>
        </Row>
      </Card>
    </div>
  )
}

export default OneCard
