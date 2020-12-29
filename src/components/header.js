import React, { useState } from "react"
import { Link } from "gatsby"

const Header = () => {
  const [burgerMenu, setBurgermenu] = useState(false)

  const toggleBurger = () => {
    console.log("test")
    setBurgermenu(!burgerMenu)
  }

  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              width="28"
              height="28"
              src="/images/KR_Logo.png"
              alt="koeneraad"
            />
          </Link>

          <a
            role="button"
            className={
              !burgerMenu
                ? "navbar-burger burger"
                : "navbar-burger burger is-active"
            }
            id="hamburger"
            href="#"
            aria-label="menu"
            aria-expanded="false"
            onClick={toggleBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="burger-menu"
          className={!burgerMenu ? "navbar-menu" : "navbar-menu is-active"}
        >
          <div className="navbar-end">
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/blog" className="navbar-item">
              Blog
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/kjzweerts/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <i className="fab fa-linkedin"></i>
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://github.com/kanovic"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
