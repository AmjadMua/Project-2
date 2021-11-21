import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddArticle from "./pages/AddArticle"
import LocalNews from "./pages/LocalNews"
import Login from "./pages/Login"
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
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/news-553/items")
      setLocalNews(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        photo: form.elements.photo.value,
      }
      await axios.post("https://vast-chamber-06347.herokuapp.com/api/user", userBody)
      navigate("/login")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const addArticle = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const newsBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
      }

      await axios.post("https://vast-chamber-06347.herokuapp.com/api/v2/news-553/items", newsBody, {
        headers: {
          Authorization: localStorage.userToken,
        },
      })
      getLocalNews()
      navigate("/local-news")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("https://vast-chamber-06347.herokuapp.com/api/user/auth", userBody)
      const userToken = response.data
      localStorage.userToken = userToken
      navigate("/")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const logout = () => {
    localStorage.removeItem("userToken")
    navigate("/")
  }

  const store = {
    worldNews: worldNews,
    localNews: localNews,
    signup: signup,
    login: login,
    logout: logout,
    addArticle: addArticle,
  }
  return (
    <NewsContext.Provider value={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<World />} />
        <Route path="news/:newId" element={<OneCard />} />
        <Route path="/local-news" element={<LocalNews />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-artical" element={<AddArticle />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </NewsContext.Provider>
  )
}

export default App
