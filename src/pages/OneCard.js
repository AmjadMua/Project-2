import { useContext } from "react"

import NewsContext from "../utlis/Newsontext"
import { Card, Row, Col, Button } from "react-bootstrap"
import { useParams } from "react-router"

function OneCard() {
  const { newId } = useParams()
  const { worldNews } = useContext(NewsContext)

  const newsFound = worldNews.find(newItem => newItem.publishedAt === newId)

  return (
    <div>
      <Card className="d=flex  justify-content-center align-items-center" style={{ width: "30rem" }}>
        <Col>
          <img variant="top" src={newsFound.urlToImage} height="350px" width="350px" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>Title : {newsFound.title}</Card.Title>
            <b style={{ color: "red" }}>Jotnaist : {newsFound.author}</b>
            <Card.Text>{newsFound.description}</Card.Text>
            <Card.Text>
              Refrence : <a href={newsFound.url}>{newsFound.url}</a>{" "}
            </Card.Text>
          </Card.Body>
        </Col>

        <Button href="/"> back </Button>
      </Card>
    </div>
  )
}

export default OneCard
