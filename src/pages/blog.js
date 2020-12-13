import React from "react"
import { Link, graphql } from "gatsby"
import { SEO, Hero } from "../components/index"
import Layout from "../layouts/layout"

const Blog = ({ data }) => (
  <>
    <SEO />
    <Layout>
      <Hero title="Blog" subtitle="My thoughts" className="hero mt-6" />
      <section>
        {data.allMarkdownRemark.edges.map(post => (
          <article className="mb-6" key={post.node.id}>
            <h3 className="title is-5">{post.node.frontmatter.title}</h3>
            <span className="tag mr-3">
              {`Author: ${post.node.frontmatter.author}`}
            </span>
            <span className="tag mr-3">
              {`Date: ${post.node.frontmatter.date}`}
            </span>
            <div className="mt-5">
              <button class="button is-ghost is-small">
                <Link
                  style={{ color: "black" }}
                  to={post.node.frontmatter.path}
                >
                  Read More
                </Link>
              </button>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  </>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default Blog
