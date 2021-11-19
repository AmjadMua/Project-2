import { useContext, useRef } from "react"
import { Row, Button } from "react-bootstrap"
import Carousel from "../components/Carousel"
import NewsCard from "../components/NewsCard"
import NewsContext from "../utlis/Newsontext"
import background from "../images/background.jpg"
import styles from "../App.css"

function World() {
  const { worldNews } = useContext(NewsContext)
  const worldNewsSection = useRef(null)

  const goToworldNewsSection = () => window.scrollTo({ top: worldNewsSection.current.offsetTop, behavior: "smooth" })

  return (
    <>
      <section className={styles.HomeSection}>
        <h1>News Journal</h1>
        <h4>Explore the world !</h4>
        <div>
          <Button variant="dark" className="me-4" onClick={goToworldNewsSection}>
            Get started !
          </Button>
          <Button variant="dark" href="./local-news">
            {" "}
            Local news{" "}
          </Button>
        </div>
      </section>
      <Carousel />
      <Row ref={worldNewsSection}>
        {worldNews.map(newItem => (
          <NewsCard newItem={newItem} />
        ))}
      </Row>
    </>
  )
}

export default World
