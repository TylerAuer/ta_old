const path = require('path');

/**
 * Generate Post Pages
 *
 * Generates a page for every single post inside /posts as part of the build process in gatsby-node
 */
exports.buildPostPages = async (graphql, createPage) => {
  const allPosts = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              fields {
                path
              }
            }
          }
        }
      }
    `,
  );
  const posts = allPosts.data.allMdx.edges;

  posts.forEach((post) => {
    createPage({
      path: post.node.fields.path,
      component: path.resolve('./src/templates/post.tsx'),
    });
  });
};
