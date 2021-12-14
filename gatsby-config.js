module.exports = {
  siteMetadata: {
    title: `Tally — The community owned & operated wallet`,
    description: ``,
    image: `https://tally.cash/Tally-Web3-Wallet-website.png`, // Twitter wants an absolute rather than relative url.
    author: `@thesis_co`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tally — The community owned & operated wallet`,
        short_name: `Tally`,
        start_url: `/`,
        background_color: `#fbf9f2`,
        theme_color: `#fbf9f2`,
        display: `minimal-ui`,
        icon: `src/tally-fav.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`,
    {
      resolve: "gatsby-plugin-matomo",
      options: {
        siteId: "1",
        matomoUrl: "https://tallycash.matomo.cloud",
        siteUrl: "https://tally.cash",
      },
    },
  ],
};
