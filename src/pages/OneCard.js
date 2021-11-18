import { useContext } from "react"

import NewsContext from "../utlis/Newsontext"
import { Card, Row, Col } from "react-bootstrap"

function OneCard() {
  const { news } = useContext(NewsContext)

  console.log("from one card", news)

  return (
    <>
      <Card>
        <Row>
          <Col>
            <Card.Img variant="top" src="" />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default OneCard
