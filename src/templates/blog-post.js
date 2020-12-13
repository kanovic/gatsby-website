import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/layout"
import { SEO } from "../components/index"

const BlogTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="container px-3">
          <div class="columns is-centered">
            <div class="column is-two-thirds">
              <section className="hero mt-6">
                <div className="hero-body pl-0">
                  <h1 className="title">{post.frontmatter.title}</h1>
                  <span className="tag mr-3">{`Author: ${post.frontmatter.author}`}</span>
                  <span className="tag">{`Date: ${post.frontmatter.date}`}</span>
                </div>
              </section>
              <div className="block">
                <button class="button is-ghost is-small">
                  <Link style={{ color: "black" }} to="/blog">
                    Go Back
                  </Link>
                </button>
              </div>
              <section className="block">
                <article dangerouslySetInnerHTML={{ __html: post.html }} />
              </section>
              <div className="block">
                <button class="button is-ghost is-small">
                  <Link style={{ color: "black" }} to="/blog">
                    Go Back
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
      excerpt
    }
  }
`

export default BlogTemplate
