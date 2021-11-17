import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import NewsLogo from "../images/NewsLogo.png"

function NavbarItem() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img src={NewsLogo} width="100" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              World
            </Link>
            <Link className="nav-link" to="/local-news">
              Local News
            </Link>
          </Nav>
          <Nav>
            <Link to="/sign" className="nav-link">
              Sign as journalist
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
