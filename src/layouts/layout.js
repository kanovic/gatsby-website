import React from "react"
import Helmet from "react-helmet"
import Favicon from "../../static/favicon.ico"
import Header from "../components/header"

const Layout = ({ children }) => (
  <>
    <Helmet
      title="koeneraad.com"
      meta={[
        {
          name: "description",
          content: "Personal Gatsby website about dealing with computer stuff.",
        },
        {
          name: "keywords",
          content: "gatsby, react, webdevelopment, blog, koeneraad",
        },
      ]}
    >
      <link rel="icon" href={Favicon} />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
        crossorigin="anonymous"
      />
    </Helmet>
    <>
      <Header />
      {children}
    </>
  </>
)

export default Layout
