import { useContext } from "react"
import { Row } from "react-bootstrap"
import LocalCard from "../components/LocalCard"
import NewsContext from "../utlis/Newsontext"
import Carousel from "../components/Carousel"

function LocalNews() {
  const { localNews } = useContext(NewsContext)

  return (
    <>
      <h1>Local News: </h1>
      <Carousel />
      <Row>
        {localNews.map(localItem => (
          <LocalCard localItem={localItem} />
        ))}
      </Row>
    </>
  )
}

export default LocalNews
