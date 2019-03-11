module.exports = {
  siteMetadata: {
    title: `dlip-blog`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `coffeescript-breakout`,
        path: `${__dirname}/../coffeescript-breakout/build`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
  ],
  pathPrefix: `/code`,
}
