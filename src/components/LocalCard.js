import { useContext, useState } from "react"
import { Card, Col, Row, Button } from "react-bootstrap"
import EditModal from "../components/EditModal"
import NewsContext from "../utlis/Newsontext"

function LocalCard(props) {
  const { localItem, inProfile } = props
  const { deleteArtical } = useContext(NewsContext)
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
        <Card style={{ width: "70rem" }}>
          <Row>
            <Col md={4}>
              <Card.Img variant="top" src={localItem.image} />
            </Col>
            <Col md={7}>
              <Card.Body>
                <Card.Title>{localItem.title}</Card.Title>
                {inProfile ? (
                  <>
                    <Button className="me-2" variant="success" onClick={handlOpen}>
                      Edit
                    </Button>
                    <Button className="me-2" variant="danger" onClick={() => deleteArtical(localItem._id)}>
                      {" "}
                      Delete{" "}
                    </Button>
                  </>
                ) : (
                  <Card.Text>{localItem.description}</Card.Text>
                )}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
      <EditModal show={show} handlClose={handlClose} localItem={localItem} />
    </>
  )
}

export default LocalCard
