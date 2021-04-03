const path = require('path');

/**
 * Generate a page for each tag
 *
 * Generates a page for every unique tag grouped by the blog each belongs to. This is important
 * because there may be /code/tag/alpine and /adventure/tag/alpine which should
 * remain distinct
 */
exports.buildTagPages = async (graphql, createPage) => {
  const data = await graphql(
    `
      query {
        code: allMdx(filter: { fields: { blog: { eq: "code" } } }) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
        adventure: allMdx(filter: { fields: { blog: { eq: "adventure" } } }) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `,
  );

  const blogs = Object.keys(data.data);

  blogs.forEach((blog) => {
    data.data[blog].group.forEach((tag) => {
      createPage({
        path: `/${blog}/tag/${tag.fieldValue.toLowerCase()}/`,
        component: path.resolve('./src/templates/cat_and_tag.tsx'),
        context: {
          blog: blog,
          label: tag.fieldValue,
          isTag: true,
          isCategory: false,
          type: 'Tag',
        },
      });
    });
  });
};
