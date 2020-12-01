module.exports = {
  siteMetadata: {
    title: `koeneraad.com`,
    titleTemplate: ``,
    author: `Koenraad`,
    description: "Personal Gatsby website about dealing with computer stuff.",
    url: "https://koeneraad.com",
    image: "/images/Image.png",
    favicon: "/images/favicon.ico",
    twitterUsername: "@koeneraad",
  },
  plugins: [
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
