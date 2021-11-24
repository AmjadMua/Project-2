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
      <div className="local">
        <Card className="card" style={{ width: "70rem", height: "280px" }}>
          <Row>
            <Col md={4}>
              <Card.Img variant="top" src={localItem.image} style={{ marginLeft: "15px", marginTop: "15px" }} />
            </Col>
            <Col md={7} style={{ justifyItems: "center" }}>
              <Card.Body>
                <Card.Title>{localItem.title}</Card.Title>
                <Card.Text style={{ fontSize: "15px", color: "red" }}>
                  By: {localItem._user.firstName} {localItem._user.lastName}
                </Card.Text>
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
                  <Card.Text style={{ fontSize: "13px" }}>{localItem.description}</Card.Text>
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
