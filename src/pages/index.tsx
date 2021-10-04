import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { spacing } from '@/constants';
import { GlobalStyles } from '@/components/GlobalStyles';
import { Box } from '@/elements/Box';
import { Chip } from '@/components/Chip';
import { Button } from '@/components/Button';
import { PostPreview } from '@/components/PostPreview';
import { Block } from '@/components/Block';
import { Flex, FlexJustification } from '@/components/Flex';
import { A } from '@/elements/A';
import { TruthsAndLies } from '@/components/TruthsAndLies';

import { Icon } from '@/elements/Icon';
import { PageBox } from '@/components/PageBox';
import { Heading } from '@/elements/Heading';

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

const Bio = () => (
  <section id="name-and-bio">
    <Block>
      <p>
        After teaching math for twelve years, I taught myself to code. Now I build social capital
        systems at <A to="http://nextdoor.com">Nextdoor</A> that motivate users to build community
        in their neighborhoods.
      </p>
      <p>
        When not staring at a screen I enjoy reading sci-fi and fantasy series, making puzzles,
        playing board games, and long walks on exposed ridgelines.
      </p>
    </Block>
  </section>
);

const Projects = () => {
  const projectCss = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${spacing.xl} 0;

    & h3 {
      width: auto;
      margin: 0.5rem 1.5rem 0.5rem 0;
      display: inline-block;
      vertical-align: middle;
    }

    & .icon {
      width: 5rem;
      flex-shrink: 0;
      margin-left: 3rem;

      & svg {
        fill: var(--color-punch);
      }
    }
  `;

  const chipCss = css`
    padding: 3px 1rem 2px 1rem;
  `;

  return (
    <section role="list" id="projects">
      <Heading level={2}>Projects</Heading>
      <Box role="listitem">
        <div css={projectCss}>
          <div>
            <Flex flex={FlexJustification.start}>
              <Heading level={3}>Bad Calculators</Heading>
              <div>
                <Chip sx={chipCss} to="https://www.badcalculators.com/">
                  Live
                </Chip>
                <Chip sx={chipCss} to="https://github.com/TylerAuer/bad-calculators">
                  Source
                </Chip>
              </div>
            </Flex>
            <p>
              Mathy puzzles on pitiful, miserable calculators. These brain melters are addictive:
              ~5K users have amassed over 150k puzzle attempts. Bring a pencil (or a BFS algorithm).
            </p>
          </div>
          <div className="icon">
            <Icon icon="calculator" />
          </div>
        </div>
      </Box>
      <Box role="listitem">
        <div css={projectCss}>
          <div>
            <Flex flex={FlexJustification.start}>
              <Heading level={3}>Super Stupid Props</Heading>
              <div>
                <Chip
                  sx={chipCss}
                  to="https://docs.google.com/forms/d/e/1FAIpQLSddqaaSxbJne8yJ7XNdAsxFPC68cmjq2aHG6IpHRqRmZKnYAg/viewform"
                >
                  Sign Up
                </Chip>
                <Chip sx={chipCss} to="https://github.com/TylerAuer/super-bowl-props-lv">
                  Source
                </Chip>
              </div>
            </Flex>
            <p>
              A Super Bowl props game where players optionally contribute to a community pot donated
              to a charity of the winner's choosing. In 2021 we donated $1,568 to the Pancreatic
              Cancer Action Network!{' '}
              <A to="https://docs.google.com/forms/d/e/1FAIpQLSddqaaSxbJne8yJ7XNdAsxFPC68cmjq2aHG6IpHRqRmZKnYAg/viewform">
                Sign up
              </A>{' '}
              to play next year; donations optional.
            </p>
          </div>
          <div className="icon">
            <Icon icon="football" />
          </div>
        </div>
      </Box>

      <Box role="listitem">
        <div css={projectCss}>
          <div>
            <Flex flex={FlexJustification.start}>
              <Heading level={3}>Fruit Matrix</Heading>
              <div>
                <Chip sx={chipCss} to="https://fruit.tylerauer.com">
                  Live
                </Chip>
                <Chip sx={chipCss} to="https://fruit.tylerauer.com/#/data">
                  Data
                </Chip>
                <Chip sx={chipCss} to="https://github.com/TylerAuer/fruit">
                  Source
                </Chip>
              </div>
            </Flex>
            <p>
              Drag-and-drop fruit on a two-axis graph to rate each's tastiness and ease of eating.
              Submit your ratings and get hit with a smorgasbord of unnecessarily involved{' '}
              <A to="https://fruit.tylerauer.com/#/data/#histograms">charts</A> aggregating every
              rating the site has ever seen.
            </p>
          </div>
          <div className="icon">
            <Icon icon="fruit" />
          </div>
        </div>
      </Box>

      <Box role="listitem">
        <div css={projectCss}>
          <div>
            <Flex flex={FlexJustification.start}>
              <Heading level={3}>Bookshelf</Heading>
              <div>
                <Chip sx={chipCss} to="/bookshelf">
                  Live
                </Chip>
              </div>
            </Flex>
            <p>
              A big 'ol pile of my favorite books presented in a slick masonry grid with filters for
              themes and genres.
            </p>
          </div>
          <div className="icon">
            <Icon icon="book" />
          </div>
        </div>
      </Box>
    </section>
  );
};

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
