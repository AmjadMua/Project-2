import { Carousel } from "react-bootstrap"
import carsoul1 from "../images/carousel1.jpg"
import carsoul2 from "../images/carousel2.jpg"
import carsoul3 from "../images/carousel3.jpg"
function CarouselItem() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={carsoul2} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carsoul3} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carsoul1} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselItem
