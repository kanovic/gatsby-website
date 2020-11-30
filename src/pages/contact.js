import React from "react"
import Layout from "../layouts/layout"
import Form from "../components/form"

const Contact = () => (
  <Layout>
    <section class="hero mt-6">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Contact</h1>
          <h2 class="subtitle">Ask me anything</h2>
        </div>
      </div>
    </section>
    <Form />
  </Layout>
)

export default Contact
