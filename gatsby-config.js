module.exports = {
  siteMetadata: {
    title: 'Portfolio'
  },
  pathPrefix: "/portfolio",
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
  ]
};
