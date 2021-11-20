import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"

function SignUp() {
  const { signup } = useContext(NewsContext)
  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={signup}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control required type="text" name="firstName" placeholder="Enter your First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required type="text" name="lastName" placeholder="Enter your last name " />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control required type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo</Form.Label>
          <Form.Control required type="url" name="photo" placeholder="Photo" />
        </Form.Group>
        <Button variant="primary" required type="submit">
          Sign
        </Button>
      </Form>
    </div>
  )
}

export default SignUp
