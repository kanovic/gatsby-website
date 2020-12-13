import React from "react"
import { Header } from "../components/index"

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="container px-3">
      <div class="columns is-centered">
        <div class="column is-two-thirds pb-0">{children}</div>
      </div>
    </div>
  </>
)

export default Layout
