import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddArticle from "./pages/AddArticle"
import LocalNews from "./pages/LocalNews"
import Login from "./pages/Login"
import OneCard from "./pages/OneCard"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import World from "./pages/World"
import NewsContext from "./utlis/Newsontext"
import "./App.css"

function App() {
  const [worldNews, setWorldNews] = useState([])
  const [localNews, setLocalNews] = useState([])
  const [profile, setprofile] = useState(null)
  const [bookmarks, setBookmarks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getWorldNews()
    getLocalNews()
    if (localStorage.userToken) {
      getProfile()
    }
  }, [])

  // get world news
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

  // get Locak news
  const getLocalNews = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/news-553/items")
      setLocalNews(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  // Sign up
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

  // Login
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

  // Log out
  const logout = () => {
    localStorage.removeItem("userToken")
    navigate("/")
  }

  //  Add Articale
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

  //get profile
  const getProfile = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/user/me", {
        headers: {
          Authorization: localStorage.userToken,
        },
      })
      getLocalNews()
      setprofile(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  // confirm artical edit
  const confirmArticale = async (e, newsId) => {
    e.preventDefault()

    try {
      const form = e.target
      const newsBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
      }

      await axios.put(`https://vast-chamber-06347.herokuapp.com/api/v2/news-553/items/${newsId}`, newsBody, {
        headers: {
          Authorization: localStorage.userToken,
        },
      })
      getLocalNews()
      getProfile()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  // delete artical
  const deleteArtical = async newsId => {
    try {
      await axios.delete(`https://vast-chamber-06347.herokuapp.com/api/v2/news-553/items/${newsId}`, {
        headers: {
          Authorization: localStorage.userToken,
        },
      })
      getLocalNews()
      getProfile()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  // add bookmark
  const addToBookmark = async newId => {
    try {
      const bookMarkId = {
        url: newId,
      }
      console.log(bookMarkId)
      await axios.post(`https://vast-chamber-06347.herokuapp.com/api/v2/testProject/favourite`, bookMarkId, {
        headers: {
          Authorization: localStorage.userToken,
        },
      })
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  // get bookmarks on profile page
  const getBookmarks = async () => {
    try {
      const response = await axios.get("https://vast-chamber-06347.herokuapp.com/api/v2/testProject/favourite", {
        headers: {
          Authorization: localStorage.userToken,
        },
      })
      console.log(response)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const store = {
    worldNews: worldNews,
    localNews: localNews,
    profile: profile,
    bookmarks: bookmarks,
    signup: signup,
    login: login,
    logout: logout,
    addArticle: addArticle,
    confirmArticale: confirmArticale,
    deleteArtical: deleteArtical,
    addToBookmark: addToBookmark,
    getBookmarks: getBookmarks,
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
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </NewsContext.Provider>
  )
}

export default App
