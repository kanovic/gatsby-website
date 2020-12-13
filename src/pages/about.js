import React, { useState } from "react"
import { SEO, Hero, Tab, tabs } from "../components/index"
import Layout from "../layouts/layout"

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
