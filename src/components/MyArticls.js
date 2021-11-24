import { useContext, useState } from "react"
import { Col, Row, Card, Button } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"
import EditModal from "./EditModal"

function MyArticls() {
  const { deleteArtical, localNews } = useContext(NewsContext)
  const [show, setShow] = useState(false)
  const handlOpen = () => {
    setShow(true)
  }

  const handlClose = () => {
    setShow(false)
  }
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        {localNews.map(localitem => (
          <>
            <Card style={{ width: "70rem" }}>
              <Row>
                <Col md={4}>
                  <Card.Img variant="top" src={localitem.image} />
                </Col>
                <Col md={7}>
                  <Card.Body>
                    <Card.Title>{localitem.title}</Card.Title>
                    <Button className="me-2" variant="success" onClick={handlOpen}>
                      Edit
                    </Button>
                    <Button className="me-2" variant="danger" onClick={() => deleteArtical(localitem._id)}>
                      {" "}
                      Delete{" "}
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <EditModal show={show} handlClose={handlClose} localitem={localitem} />
          </>
        ))}
      </div>
    </>
  )
}

export default MyArticls
