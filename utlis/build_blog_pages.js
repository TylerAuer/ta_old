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

  blogWithListOfPosts.forEach((b) => {
    const blog = b.fieldValue;

    createPage({
      path: `/${blog}`,
      component: path.resolve('./src/templates/blog_list.tsx'),
      context: {
        blog: blog,
      },
    });
  });
};
