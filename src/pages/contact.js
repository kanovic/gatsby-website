import React from "react"
import { SEO, Hero, Form } from "../components/index"
import Layout from "../layouts/layout"

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
