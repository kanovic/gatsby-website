/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `koeneraad.com`,
    author: `Koenraad`,
    description: "Personal Gatsby website about dealing with computer stuff.",
    url: "https://koeneraad.com",
    image: "/images/Image.png",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
