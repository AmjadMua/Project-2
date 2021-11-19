import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function LocalCard(props) {
  const { localItem } = props
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <Card style={{ width: "70rem" }}>
          <Row>
            <Col md={4}>
              <Card.Img variant="top" src={localItem.image} />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title>{localItem.title}</Card.Title>
                <Card.Text>{localItem.description}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  )
}

export default LocalCard
