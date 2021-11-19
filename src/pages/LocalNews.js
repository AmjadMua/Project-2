import { useContext } from "react"
import { Row } from "react-bootstrap"
import LocalCard from "../components/LocalCard"
import NewsContext from "../utlis/Newsontext"

function LocalNews() {
  const { localNews } = useContext(NewsContext)

  return (
    <>
      <Row>
        {localNews.map(localItem => (
          <LocalCard localItem={localItem} />
        ))}
      </Row>
    </>
  )
}

export default LocalNews
