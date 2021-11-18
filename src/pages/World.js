import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import Carousel from "../components/Carousel"
import NewsCard from "../components/NewsCard"
import NewsContext from "../utlis/Newsontext"

function World() {
  const { news } = useContext(NewsContext)
  console.log("news:", news)

  return (
    <>
      <Carousel />
      <Container>
        {news.map(newItem => (
          <NewsCard newItem={newItem} />
        ))}
      </Container>
    </>
  )
}

export default World
