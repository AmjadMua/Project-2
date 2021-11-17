import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel />} />
      </Routes>
    </>
  )
}

export default App
