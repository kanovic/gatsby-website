import React from "react"
import Layout from "../layouts/layout"
import { SEO } from "../components/index"

const Home = () => (
  <>
    <SEO />
    <Layout>
      <section className="hero is-fullheight">
        <div className="hero-body pl-0">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-narrow">
                <figure class="image is-128x128">
                  <img src="/images/Image.png" alt="koeneraad golf" />
                </figure>
              </div>
              <div className="column">
                <h1 className="title is-1">koeneraad.</h1>
                <p>
                  Building web applications and trying out new internet
                  technologies for fun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </>
)

export default Home
