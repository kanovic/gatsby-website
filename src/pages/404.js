import React from "react"
import { Link } from "gatsby"
import { SEO, Hero } from "../components/index"
import Layout from "../layouts/layout"

const ErrorPage = () => (
  <>
    <SEO />
    <Layout>
      <Hero title="404" subtitle="Page not found..." className="hero mt-6" />
      <Link style={{ color: "black" }} to="/">
        Return
      </Link>
    </Layout>
  </>
)

export default ErrorPage
