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

  const endpoints = JSON.parse(fs.readFileSync('cypress/fixtures/endpoints.json'));

  posts.forEach(async (post) => {
    urlPath = post.node.fields.path;

    createPage({
      path: urlPath,
      component: path.resolve('./src/templates/post.tsx'),
    });

    endpoints.all.push(urlPath);
    endpoints.posts.push(urlPath);
  });

  fs.writeFileSync('cypress/fixtures/endpoints.json', JSON.stringify(endpoints));
};
