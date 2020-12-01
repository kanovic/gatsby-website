import React from "react"
import Layout from "../layouts/layout"
import SEO from "../components/seo"

const Home = () => (
  <>
    <SEO />
    <Layout>
      <section className="hero is-fullheight">
        <div className="hero-body pl-0">
          <div className="container">
            <h1 className="title is-1">koeneraad.</h1>
            <p>
              Building web applications and trying out new internet technologies
              for fun.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  </>
)

export default Home
