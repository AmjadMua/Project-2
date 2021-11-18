import { Carousel, Row, Col } from "react-bootstrap"
import carsoul1 from "../images/carousel1.jpg"
import carsoul2 from "../images/carousel2.jpg"
import carsoul3 from "../images/carousel3.jpg"
import header from "../images/header.png"
function CarouselItem() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <img src={header} width="800px" />
      </div>
      <Row>
        <Col className="mx-auto" sm={12} md={9}>
          <Carousel variant="light" className="d-block mx-auto mt-5">
            <Carousel.Item>
              <img className="d-block w-100" src={carsoul2} alt="First slide" />
              <Carousel.Caption>
                <h5>interest on collecting all interviews, information-gathering and/or writing articles.</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={carsoul3} alt="Second slide" />
              <Carousel.Caption>
                <h5>interest on collecting all interviews, information-gathering and/or writing articles.</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={carsoul1} alt="Third slide" />
              <Carousel.Caption>
                <h5>interest on collecting all interviews, information-gathering and/or writing articles.</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  )
}

export default CarouselItem
