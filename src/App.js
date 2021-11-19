import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import LocalNews from "./pages/LocalNews"
import OneCard from "./pages/OneCard"
import SignUp from "./pages/SignUp"
import World from "./pages/World"
import NewsContext from "./utlis/Newsontext"

function App() {
  const [worldNews, setWorldNews] = useState([])
  const [localNews, setLocalNews] = useState([])
  const navigate = useNavigate()

  const getWorldNews = async () => {
    try {
      const response = await axios.get(
        " https://newsapi.org/v2/everything?q=Apple&from=2021-11-16&sortBy=popularity&apiKey=4ff17d68ee6c46f9bdf7ce4b27d23ad0"
      )
      setWorldNews(response.data.articles)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  useEffect(() => {
    getWorldNews()
    getLocalNews()
  }, [])
  const getLocalNews = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/testProject/items")
      setLocalNews(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const signUp = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const userBody = {
        firstName: form.element.firstName.valu,
        lastName: form.element.lastName.valu,
        email: form.element.email.valu,
        password: form.element.password.valu,
        image: form.element.image.valu,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
      navigate("/login")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const store = {
    worldNews: worldNews,
    localNews: localNews,
    signUp: signUp,
  }
  return (
    <NewsContext.Provider value={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<World />} />
        <Route path="news/:newId" element={<OneCard />} />
        <Route path="/local-news" element={<LocalNews />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </NewsContext.Provider>
  )
}

export default App
