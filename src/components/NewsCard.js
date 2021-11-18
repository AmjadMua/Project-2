import { Card, Button, Col, Row } from "react-bootstrap"
import { IconContext } from "react-icons"
import { FcBookmark } from "react-icons/fc"
function NewsCard(props) {
  const { newItem } = props
  return (
    <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: "60rem" }}>
        <Row>
          <Col md={4}>
            <Card.Img variant="top" src={newItem.urlToImage} />
          </Col>
          <Col md={7}>
            <Card.Body>
              <Card.Title>{newItem.title}</Card.Title>
              <Card.Text>{newItem.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Col>
          <Col>
            <IconContext.Provider value={{ size: "2.5em" }}>
              <div>
                <a href="">
                  <FcBookmark />
                </a>
              </div>
            </IconContext.Provider>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default NewsCard
