import React from 'react';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';

export default function Adventure({ data }) {
  console.log(data);
  return (
    <div>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        Amazing Pandas Eating Things
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{' '}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date_created}
              </span>
            </h3>
          </Link>
          <div>
            {node.tags && node.tags.map((tag) => <div key={tag}>{tag}</div>)}
          </div>
        </div>
      ))}
    </div>
  );
}
export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { blog: { eq: "adventure" } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            tags
            title
            subtitle
            location
            date_created(formatString: "DD MMMM, YYYY")
            category
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`;
