import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export default ({ data }) => {
  const post = data.mdx;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          display: `block`,
        }}
      >
        {post.frontmatter.date}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    mdx(fields: { path: { eq: $path } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date_created(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;
