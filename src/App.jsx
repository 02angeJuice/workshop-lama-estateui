import "./layout.scss"
import Navbar from "./components/navbar/Navbar"
import HomePage from "./pages/homePage/homePage"

const App = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="content">
        <HomePage />
      </div>
    </div>
  )
}

export default App
