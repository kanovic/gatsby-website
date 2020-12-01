import React from "react"
import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Form from "../components/form"
import SEO from "../components/seo"

const Contact = () => (
  <>
    <SEO />
    <Layout>
      <Hero title="Contact" subtitle="Ask me anything" className="hero mt-6" />
      <Form />
    </Layout>
  </>
)

export default Contact
