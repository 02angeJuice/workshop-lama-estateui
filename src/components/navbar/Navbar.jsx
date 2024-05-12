import { useState } from "react"
import "./navbar.scss"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const test = () => {
    return ""
  }

  return (
    <nav>
      <div className="left">
        <a className="logo" href="#">
          <img src="/logo.png" alt="" />
          <span>Estate</span>
        </a>

        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agent</a>
      </div>
      <div className="right">
        <a href="">Sign in</a>
        <a href="" className="register">
          Sign up
        </a>

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpenMenu((value) => !value)}
          />
        </div>

        <div className={openMenu ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agent</a>
          <a href="">Sign in</a>
          <a href="">Sign up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
