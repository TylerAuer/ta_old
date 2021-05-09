module.exports = {
  siteMetadata: {
    title: `Tyler Auer Portfolio`,
    author: `Tyler Auer`,
    description: `A home base for everything Tyler, for better or for worse.`,
    siteUrl: `https://tylerauer.com/`,
    social: {
      twitter: `tylerauer`,
    },
  },
  pathPrefix: '/ta',
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    /**
     * Makes posts directory available to the Data Layer
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    /**
     * Converts .mdx files into html (and handles inline react components)
     */
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    /**
     * Adds support for @emotion CSS in JS
     */
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    /**
     * Import Google fonts for the site
     */
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito\:400,400i,700,700i,900,900i`,
          'JetBrains Mono:400,400i,700,700i',
          // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};
