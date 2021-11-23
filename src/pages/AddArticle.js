import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"
import addImage from "../images/addNewsimg.jpg"

function AddArticle() {
  const { addArticle } = useContext(NewsContext)
  return (
    <div className="addpage">
      <section className="addpageImage">
        <img src={addImage} alt="" />
      </section>
      <section>
        <h1>Add Article</h1>
        <Form onSubmit={addArticle} className="addpageForm">
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Col>
              <Form.Control type="title" name="title" required placeholder="title" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Col>
              <Form.Control type="textarea" placeholder="description" name="description" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Col>
              <Form.Control type="url" placeholder="Image" name="image" required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-4">
            <Col>
              <button type="submit">Add Article</button>
            </Col>
          </Form.Group>
        </Form>
      </section>
    </div>
  )
}

export default AddArticle
