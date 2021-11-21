import { useContext, useRef } from "react"
import { Row, Button } from "react-bootstrap"
import NewsCard from "../components/NewsCard"
import NewsContext from "../utlis/Newsontext"

function World() {
  const { worldNews } = useContext(NewsContext)
  const worldNewsSection = useRef(null)

  const goToworldNewsSection = () => window.scrollTo({ top: worldNewsSection.current.offsetTop, behavior: "smooth" })

  return (
    <>
      <section className="WorldHeader">
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
      <h1>World News:</h1>
      <Row ref={worldNewsSection}>
        {worldNews.map(newItem => (
          <NewsCard newItem={newItem} />
        ))}
      </Row>
    </>
  )
}

export default World
