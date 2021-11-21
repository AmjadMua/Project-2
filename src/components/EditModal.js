import { useContext } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"

function EditModal(props) {
  const { show, handlClose, localItem } = props
  const { confirmArticale } = useContext(NewsContext)
  return (
    <>
      <Modal show={show} onHide={handlClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Articale</Modal.Title>
        </Modal.Header>
        <Form onSubmit={e => confirmArticale(e, localItem._id)}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control required type="text" name="title" defaultValue={localItem.title} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>description</Form.Label>
              <Form.Control required type="text" name="description" defaultValue={localItem.description} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control required type="text" name="image" defaultValue={localItem.image} />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handlClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handlClose}>
              Save changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default EditModal
