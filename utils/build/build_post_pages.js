const fs = require('fs');
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

  posts.forEach(async (post) => {
    urlPath = post.node.fields.path;

    createPage({
      path: urlPath,
      component: path.resolve('./src/templates/post.tsx'),
    });

    // Adds endpoints to a fixture file Cypress can reference
    await fs.appendFileSync('cypress/fixtures/endpoints.txt', urlPath + '\n');
  });
};
