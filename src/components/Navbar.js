import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import NewsLogo from "../images/NewsLogo.png"
import { IconContext } from "react-icons"
import { BsPencilSquare } from "react-icons/bs"

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
            {localStorage.userToken ? (
              <Nav className="me-auto">
                <Link className="nav-link" to="/add-Artical">
                  Add Artical
                  <IconContext.Provider value={{ size: "1.5em" }}>
                    <BsPencilSquare />
                  </IconContext.Provider>
                </Link>
              </Nav>
            ) : null}
          </Nav>

          {localStorage.userToken ? (
            <Nav className="ms-auto">
              <div className="nav-link">Logout</div>
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </Nav>
          ) : (
            <Nav>
              <Link to="/signup" className="nav-link">
                Sign as journalist
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
