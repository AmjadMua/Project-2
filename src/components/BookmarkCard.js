import { Col, Row, Card } from "react-bootstrap"
function BookmarkCard(props) {
  const { bookmark } = props
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <Card style={{ width: "70rem" }}>
          <Row>
            <Col md={4}>
              <Card.Img variant="top" src={bookmark.image} />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title>{bookmark.title}</Card.Title>
                <Card.Text>{bookmark.description}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>{" "}
    </>
  )
}

export default BookmarkCard
