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
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-mdx`,
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
     * Collects book data
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `books`,
        path: `${__dirname}/src/bookshelf/`,
      },
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
    /**
     * Configures Google Analytics
     */
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-V668W7ZV6F'],
        // pluginConfig: {
        //   respectDNT: true,
        // },
      },
    },
  ],
};
