import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts/layout"

const Blog = ({ data }) => (
  <Layout>
    <section class="hero mt-6">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Blog</h1>
          <h2 class="subtitle">My thoughts</h2>
        </div>
      </div>
    </section>
    {data.allMarkdownRemark.edges.map(post => (
      <article
        style={{ display: "flex", flexDirection: "column" }}
        key={post.node.id}
      >
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by {post.node.frontmatter.author} on{" "}
          {post.node.frontmatter.date}
        </small>
        <Link
          style={{
            margin: "1rem 0 2rem 0",
            color: "black",
          }}
          to={post.node.frontmatter.path}
        >
          Read More
        </Link>
      </article>
    ))}
  </Layout>
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
