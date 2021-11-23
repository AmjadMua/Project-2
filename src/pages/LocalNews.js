import { useContext } from "react"
import { Row } from "react-bootstrap"
import LocalCard from "../components/LocalCard"
import NewsContext from "../utlis/Newsontext"
import Carousel from "../components/Carousel"

function LocalNews() {
  const { localNews } = useContext(NewsContext)

  return (
    <div className="localPage">
      <h1>Local News: </h1>
      <p>
        coverage of events, by the news, in a local context , try to caters to the news of our regional and local
        communities
      </p>
      <Carousel />
      <Row>
        {localNews.map(localItem => (
          <LocalCard localItem={localItem} />
        ))}
      </Row>
    </div>
  )
}

export default LocalNews
