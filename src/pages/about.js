import React, { useState } from "react"
import SEO from "../components/seo"
import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Tab from "../components/tabs"
import tabs from "../components/tabContent"

const About = () => {
  const [selected, setSelected] = useState("Me")

  return (
    <>
      <SEO />
      <Layout>
        <Hero title="About" subtitle="My background" className="hero mt-6" />
        <Tab tabs={tabs} selected={selected} setSelected={setSelected}></Tab>
      </Layout>
    </>
  )
}

export default About
