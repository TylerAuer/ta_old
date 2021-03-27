const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  // Select only MarkdownRemark files
  if (node.internal.type === `MarkdownRemark`) {
    // Generate the full slug (ex: '/adventure/2020-03-26') and add as a node field
    const slug = `${createFilePath({
      node,
      getNode,
      basePath: 'src/posts/',
    })}`;

    createNodeField({
      node: node,
      name: 'slug',
      value: slug,
    });

    // Pull the blog out of the slug (ex: '/adventure/2020-03-26' => 'adventure') and add as a field
    const blog = slug.split('/')[1];
    createNodeField({
      node: node,
      name: 'blog',
      value: blog,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const adventurePosts = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { blog: { eq: "adventure" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  adventurePosts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/AdventurePost.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // Generate pages for each codePost
  const codePosts = await graphql(`
    query {
      allMarkdownRemark(filter: { fields: { blog: { eq: "code" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  codePosts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/CodePost.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
