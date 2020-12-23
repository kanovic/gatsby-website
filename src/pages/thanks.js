import React from "react"
import { SEO, Hero } from "../components/index"
import Layout from "../layouts/layout"

const Thanks = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero
          title="Contact"
          subtitle="Thank you for your message"
          className="hero mt-6"
        />
      </Layout>
    </>
  )
}

export default Thanks
