import { Col } from "react-bootstrap"
import NewsLogo from "../images/NewsLogo.png"
import { IconContext } from "react-icons"
import { AiOutlineMail } from "react-icons/ai"
function Footer() {
  return (
    <div className="footer">
      <Col>
        <img src={NewsLogo} width="100" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" />
      </Col>
      <Col>
        <h4>About</h4>
        <p>
          WELCOME to News Journal , here we showcase a collection of noteworthy articles of various topics from the
          local area and the rest of the world.{" "}
        </p>
      </Col>
      <Col>
        <h4> Contact </h4>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <AiOutlineMail />
          <a>NewsJournail@gmail.com</a>
        </IconContext.Provider>
      </Col>
    </div>
  )
}

export default Footer
