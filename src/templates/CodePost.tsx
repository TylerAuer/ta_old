import React from 'react';
import { graphql } from 'gatsby';

export default function CodePost({ data }) {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <h2>A code post</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        date_created
        date_last_update
        category
        tags
      }
    }
  }
`;
