const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { buildPostPages } = require('./utils/build/build_post_pages');
const { buildBlogPages } = require('./utils/build/build_blog_pages');
const { buildCategoryPages } = require('./utils/build/build_category_pages');
const { buildTagPages } = require('./utils/build/build_tag_pages');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    // Grab path to file from src/posts. (ex: /code/2020-02-20)
    const path = createFilePath({ node, getNode, basePath: 'src/posts/' });

    // Add a slug ('[blog]/[year-4-digits]-[month-2-digits]-[day-2-digits]')
    createNodeField({
      node,
      name: `path`,
      value: path,
    });

    // Pull the blog out of the slug (ex: '/adventure/2020-03-26' => 'adventure') and add as a field
    const blog = path.split('/')[1];
    createNodeField({
      node,
      name: 'blog',
      value: blog,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await buildPostPages(graphql, createPage);
  await buildBlogPages(graphql, createPage);
  await buildCategoryPages(graphql, createPage);
  await buildTagPages(graphql, createPage);
};
