import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

export default function adventure({ data }) {
  return (
    <main>
      <h2>Adventure Blog</h2>
      <section>
        {data.allMdx.nodes.map((post) => (
          <Post key={post.id} post={post.frontmatter} />
        ))}
      </section>
    </main>
  );
}

const Post = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <div>{post.subtitle}</div>
      <div>{post.date_created}</div>
      <div>{post.locations}</div>
      <div>{post.category}</div>
      <div>{post.location}</div>
      {post.tags.map((tag: string) => (
        <div>{tag}</div>
      ))}
    </article>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { fields: { blog: { eq: "adventure" } } }) {
      nodes {
        id
        frontmatter {
          title
          subtitle
          date_created
          tags
          category
          location
        }
      }
    }
  }
`;
