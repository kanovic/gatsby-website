module.exports = {
  siteMetadata: {
    title: `koeneraad.com`,
    titleTemplate: ``,
    author: `Koenraad`,
    description: "My website about dealing with computer stuff.",
    url: "https://koeneraad.com",
    image: "/images/KR_Logo.png",
    // favicon: "/images/favicon.ico",
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Koeneraad`,
        short_name: `Koeneraad`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/maskable_icon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
}
