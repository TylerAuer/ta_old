module.exports = {
  pathPrefix: '/ta',
  plugins: [
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
    {
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
