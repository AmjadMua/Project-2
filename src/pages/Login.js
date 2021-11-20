import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"

function Login() {
  const { login } = useContext(NewsContext)
  return (
    <div>
      <Form onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login!
        </Button>
      </Form>
    </div>
  )
}

export default Login
