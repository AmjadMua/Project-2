import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import OneCard from "./pages/OneCard"
import World from "./pages/World"
import NewsContext from "./utlis/Newsontext"
function App() {
  const [news, setNews] = useState([])

  const getNews = async () => {
    try {
      const response = await axios.get(
        " https://newsapi.org/v2/everything?q=Apple&from=2021-11-16&sortBy=popularity&apiKey=4ff17d68ee6c46f9bdf7ce4b27d23ad0"
      )
      setNews(response.data.articles)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  useEffect(() => {
    getNews()
  }, [])

  const store = {
    news: news,
  }
  return (
    <NewsContext.Provider value={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<World />} />
        <Route path="/news/:newId" element={<OneCard />} />
      </Routes>
    </NewsContext.Provider>
  )
}

export default App
