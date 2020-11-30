import React, { useState } from "react"
import Layout from "../layouts/layout"
import Tab from "../components/tabs"
import tabs from "../components/tabContent"
import "../styles/global.css"

const About = () => {
  const [selected, setSelected] = useState("Me")

  return (
    <Layout>
      <section className="hero mt-6">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">About</h1>
            <h2 className="subtitle">My background</h2>
          </div>
        </div>
      </section>
      <Tab tabs={tabs} selected={selected} setSelected={setSelected}></Tab>
    </Layout>
  )
}

export default About
