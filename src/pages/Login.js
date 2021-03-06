import { useContext } from "react"
import { Form, Button } from "react-bootstrap"
import NewsContext from "../utlis/Newsontext"
import header from "../images/header.png"

function Login() {
  const { login } = useContext(NewsContext)
  return (
    <>
      <img src={header} className="headerimg" />
      <div className="signupPage login">
        <section className="signuparea pt-5" style={{ height: "300px" }}>
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and join us!</p>
          <button>
            {" "}
            <a href="/signup">Sign Now! </a>
          </button>
        </section>
        <section className="signupform pt-5">
          <Form onSubmit={login} style={{ height: "300px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
            <button type="submit">Login!</button>
          </Form>
        </section>
      </div>
    </>
  )
}

export default Login
