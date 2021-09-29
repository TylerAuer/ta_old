const fs = require('fs');
const path = require('path');
/**
 * Generate Category Pages
 *
 * Generates a page for every unique category grouped by the blog each belongs to. This is important
 * because there may be /code/category/challenge and /adventure/category/challenge which should
 * remain distinct
 */
exports.buildCategoryPages = async (graphql, createPage) => {
  const data = await graphql(
    `
      query {
        code: allMdx(filter: { fields: { blog: { eq: "code" } } }) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
        adventure: allMdx(filter: { fields: { blog: { eq: "adventure" } } }) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `,
  );

  const blogs = Object.keys(data.data);

  blogs.forEach((blog) => {
    data.data[blog].group.forEach(async (category) => {
      const urlPath = `/${blog}/category/${category.fieldValue.toLowerCase()}/`;

      createPage({
        path: urlPath,
        component: path.resolve('./src/templates/cat_and_tag.tsx'),
        context: {
          blog: blog,
          label: category.fieldValue,
          isCategory: true,
          isTag: false,
          type: 'Category',
        },
      });
    });
  });
};
