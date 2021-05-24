const fs = require('fs');
const path = require('path');
/**
 * Generate Blog Pages
 *
 * Each blog page lists the posts in descending order
 */
exports.buildBlogPages = async (graphql, createPage) => {
  const query = await graphql(`
    {
      allMdx {
        group(field: fields___blog) {
          fieldValue
        }
      }
    }
  `);

  const blogWithListOfPosts = query.data.allMdx.group;

  blogWithListOfPosts.forEach(async (b) => {
    const blog = b.fieldValue;
    const urlPath = `/${blog}/`;

    createPage({
      path: urlPath,
      component: path.resolve('./src/templates/blog_list.tsx'),
      context: {
        blog: blog,
      },
    });

    // Adds endpoints to a fixture file Cypress can reference
    await fs.appendFileSync('cypress/fixtures/endpoints.txt', urlPath + '\n');
  });
};
