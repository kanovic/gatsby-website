import React from "react"
import Header from "../components/header"

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="container px-3">
      <div class="columns is-centered">
        <div class="column is-two-thirds">{children}</div>
      </div>
    </div>
  </>
)

export default Layout
