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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `code`,
    //     path: `${__dirname}/src/posts/code`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `adventure`,
        path: `${__dirname}/src/posts/adventure`,
      },
    },
    {
      // Converts .mdx files into html (and handles inline react components)
      resolve: `gatsby-plugin-mdx`,
      options: {
        // defaultLayouts: {
        // code: require.resolve('./src/templates/CodePost.tsx'),
        // adventure: require.resolve('./src/templates/AdventurePost.tsx'),
        // },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
    {
      // Adds support for @emotion CSS in JS
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
    {
      // Import Google fonts for the site
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito`,
          'JetBrains Mono',
          // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
  ],
};
