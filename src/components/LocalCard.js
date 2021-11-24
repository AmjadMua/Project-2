import { useContext, useState } from "react"
import { Card, Col, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
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
        <Card className="card" style={{ width: "50rem", height: "280px" }}>
          <Row>
            <Col md={2}>
              <Card.Img variant="top" src={localItem.image} style={{ marginLeft: "15px", marginTop: "15px" }} />
            </Col>
            <Col md={5} style={{ justifyItems: "center" }}>
              <Card.Body>
                <Card.Title style={{ width: "600px" }}>{localItem.title}</Card.Title>
                <Card.Text style={{ fontSize: "15px", color: "red" }}>
                  By: {localItem._user.firstName} {localItem._user.lastName}
                </Card.Text>
                {inProfile ? (
                  <>
                    <button className="graysbtns" onClick={handlOpen}>
                      Edit
                    </button>
                    <button className="redbtns" onClick={() => deleteArtical(localItem._id)}>
                      {" "}
                      Delete{" "}
                    </button>
                  </>
                ) : (
                  <Card.Text style={{ fontSize: "13px", width: "600px" }}>{localItem.description}</Card.Text>
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
