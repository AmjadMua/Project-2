import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"
import styles from "../styles.module.css"

function AddArticle() {
  const { addArticle } = useContext(NewsContext)
  return (
    <div>
      <h1 className={styles.title}>Add Article</h1>
      <Form onSubmit={addArticle}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="title" name="title" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="textarea" name="description" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Image
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="url" placeholder="" name="image" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Add Article</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddArticle
