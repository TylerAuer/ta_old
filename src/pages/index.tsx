import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { spacing } from '@/constants';
import { GlobalStyles } from '@/components/GlobalStyles';
import { Box } from '@/elements/Box';
import { Button } from '@/components/Button';
import { PostPreview } from '@/components/PostPreview';
import { Block } from '@/components/Block';
import { A } from '@/elements/A';
import { TruthsAndLies } from '@/components/TruthsAndLies';

import { Icon } from '@/elements/Icon';
import { PageBox } from '@/components/PageBox';
import { Heading } from '@/elements/Heading';
import { Projects } from '@/components/index/Projects';
import { Bio } from '@/components/index/Bio';

// TODO: Figure out how to get this component to recognize data.allMdx
// currently the "data: any" just ignores it
const Home: React.FC<PageProps> = ({ data }: { data: any }) => {
  const posts = data.allMdx.nodes;
  return (
    <GlobalStyles>
      <Helmet>
        <title>Tyler Auer - Math teacher turned software developer</title>
        <meta
          name="description"
          content={`"Stupid" projects and ramblings about code and adventure.`}
        />
      </Helmet>
      <PageBox includeHomeLink={false}>
        <main>
          <Bio />
          {/* <TruthsAndLies count={5} /> */}
          <Projects />
          <Writing posts={posts} />
        </main>
      </PageBox>
    </GlobalStyles>
  );
};

export default Home;

const BlogWithFeatPosts = ({ posts }) => {
  return (
    <Box role="list">
      {posts.map((post) => (
        <PostPreview hLevel={3} role="listitem" key={post.fields.path} post={post} />
      ))}
    </Box>
  );
};

const Writing = ({ posts }) => {
  const featCodePosts = posts.filter((post) => post.fields.blog === 'code');
  const featAdventurePosts = posts.filter((post) => post.fields.blog === 'adventure');

  const blogCss = css`
    margin-bottom: ${spacing.xxl};
    & h3 {
      display: inline-block;
      vertical-align: center;
      margin: ${spacing.md} 0;

      & a {
        border: none;
        color: inherit;

        &:hover {
          color: inherit;
        }
      }
    }

    & svg {
      width: 3.5rem;
      margin-right: 2rem;
      vertical-align: middle;
    }
  `;

  const btnCss = css`
    text-align: center;
    margin: ${spacing.xl} 0;
  `;

  return (
    <>
      <section css={blogCss} id="code-posts">
        <Box>
          <A to="/code">
            <Heading level={2}>
              <Icon icon="code" />
              Code
            </Heading>
          </A>
        </Box>
        <BlogWithFeatPosts posts={featCodePosts} />
        <div css={btnCss}>
          <Button to="/code">All code posts</Button>
        </div>
      </section>

      <section css={blogCss} id="adventure-posts">
        <Box>
          <A to="/adventure">
            <Heading level={2}>
              <Icon icon="mountains" />
              Adventure
            </Heading>
          </A>
        </Box>
        <BlogWithFeatPosts posts={featAdventurePosts} />
        <div css={btnCss}>
          <Button to="/adventure">All adventure posts</Button>
        </div>
      </section>
    </>
  );
};

export const codeFeaturedQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { featured: { eq: true }, draft: { eq: false } } }) {
      nodes {
        fields {
          blog
          path
        }
        frontmatter {
          category
          date_created(formatString: "MMMM D, YYYY")
          featured
          location
          subtitle
          tags
          title
        }
      }
    }
  }
`;
