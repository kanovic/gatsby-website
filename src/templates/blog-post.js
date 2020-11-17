import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layouts/layout";

const BlogTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <small>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/blog">Go Back</Link>
    </Layout>
  );
};

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
    }
  }
`;

export default BlogTemplate;
