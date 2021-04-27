import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { css } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { SPACING } from '@/constants';
import { GlobalStyles } from '@/components/GlobalStyles';
import { Box } from '@/components/Box';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Chip } from '@/components/Chip';
import { Button } from '@/components/Button';
import { PostPreview } from '@/components/PostPreview';
import {
  CalculatorIcon,
  FootballIcon,
  FruitIcon,
  CodeIcon,
  MountainsIcon,
} from '@/components/Icons';

const NameAndBio = () => {
  const titleCss = css`
    margin: 0.5rem auto;
  `;

  const subtitleCss = css`
    font-family: var(--font-special);
    font-size: 1.8rem;
    margin-bottom: ${SPACING.xl};
  `;

  return (
    <section id="name-and-bio">
      <h1 css={titleCss}>Tyler Auer</h1>
      <Box css={subtitleCss}>Teacher turned software developer</Box>
      <p>
        After teaching math for twelve years, I taught myself to code. Now I build infrastructure to
        help developers at <a href="http://nextdoor.com">Nextdoor</a> ship features efficiently.
      </p>
      <p>
        When not staring at a screen I enjoy reading sci-fi and fantasy series, making puzzles, and
        long walks on exposed ridgelines.
      </p>
    </section>
  );
};

const TruthAndLies = () => (
  <section id="truths-and-lies">
    <Box>
      <h2>Two Thirds Truth and One Third Lies About Me</h2>
      <ul>
        <li>I love bread</li>
        <li>I own over 100 board games</li>
        <li>Has been pushed through the ocean by dolphins</li>
      </ul>
    </Box>
  </section>
);

const Projects = () => {
  const projectCss = css`
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    margin: ${SPACING.xl} 0;

    & h3 {
      color: var(--color-text-header);
      width: auto;
      margin: 0.5rem 1.5rem 0.5rem 0;
      font-size: 2.5rem;
      display: inline-block;
      vertical-align: middle;
    }
    & p {
      width: 100%;
    }
    & img {
      width: 5rem;
      height: auto;
      filter: var(--punch-filter);
      margin-right: 5rem;
      margin-left: 1.5rem;
    }
  `;

  const chipCss = css`
    padding: 3px 1rem 2px 1rem;
  `;

  return (
    <section role="list" id="projects">
      <h2>Projects</h2>
      <Box role="listitem">
        <div css={projectCss}>
          <CalculatorIcon />
          <div>
            <h3>Bad Calculators</h3>
            <Chip sx={chipCss} to="https://www.badcalculators.com/">
              Live
            </Chip>
            <Chip sx={chipCss} to="https://github.com/TylerAuer/bad-calculators">
              Source
            </Chip>
            <p>
              Mathy puzzles on pitiful, miserable calculators. These brain melters are addictive:
              ~5K users have amassed over 150k puzzle attempts. Bring a pencil (or a BFS algorithm).
            </p>
          </div>
        </div>
      </Box>
      <Box role="listitem">
        <div css={projectCss}>
          <FootballIcon />
          <div>
            <h3>Super Stupid Props</h3>
            <Chip
              sx={chipCss}
              to="https://docs.google.com/forms/d/e/1FAIpQLSddqaaSxbJne8yJ7XNdAsxFPC68cmjq2aHG6IpHRqRmZKnYAg/viewform"
            >
              Sign Up
            </Chip>
            <Chip sx={chipCss} to="https://github.com/TylerAuer/super-bowl-props-lv">
              Source
            </Chip>
            <p>
              A Super Bowl props game where players optionally contribute to a community pot donated
              to a charity of the winner's choosing. In 2021 we donated $1,568 to the Pancreatic
              Cancer Action Network!{' '}
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSddqaaSxbJne8yJ7XNdAsxFPC68cmjq2aHG6IpHRqRmZKnYAg/viewform"
              >
                Sign up
              </a>{' '}
              to play next year; donations optional.
            </p>
          </div>
        </div>
      </Box>

      <Box role="listitem">
        <div css={projectCss}>
          <FruitIcon />
          <div>
            <h3>Fruit Matrix</h3>
            <Chip sx={chipCss} to="https://fruit.tylerauer.com">
              Live
            </Chip>
            <Chip sx={chipCss} to="https://fruit.tylerauer.com/#/data">
              Data
            </Chip>
            <Chip sx={chipCss} to="https://github.com/TylerAuer/fruit">
              Source
            </Chip>

            <p>
              Drag-and-drop fruit on a two-axis graph to rate each's tastiness and ease of eating.
              Submit your ratings and get hit with a smorgasbord of unnecessarily involved{' '}
              <Link to="https://fruit.tylerauer.com/#/data/#histograms">charts</Link> aggregating
              every rating the site has ever seen.
            </p>
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
        <PostPreview role="listitem" key={post.fields.path} post={post} />
      ))}
    </Box>
  );
};

const Writing = ({ posts }) => {
  const featCodePosts = posts.filter((post) => post.fields.blog === 'code');
  const featAdventurePosts = posts.filter((post) => post.fields.blog === 'adventure');

  const blogCss = css`
    margin-bottom: ${SPACING.xxl};
    & h3 {
      display: inline-block;
      vertical-align: center;
      font-size: 2.7rem;
      color: var(--color-text-header);
      margin: ${SPACING.lg} 0;

      & a {
        border: none;

        &:hover {
          color: inherit;
        }
      }
    }

    & img {
      width: 3.5rem;
      margin-right: 2rem;
      vertical-align: middle;
    }
  `;

  const btnCss = css`
    text-align: center;
  `;

  return (
    <section id="blogs">
      <h2>Writing</h2>
      <section css={blogCss} id="code-featured-posts">
        <Box>
          <h3>
            <Link to="/code">
              <CodeIcon />
              Code
            </Link>
          </h3>
        </Box>
        <BlogWithFeatPosts posts={featCodePosts} />
        <div css={btnCss}>
          <Button to="/code">All code posts</Button>
        </div>
      </section>

      <section css={blogCss} id="code-featured-posts">
        <Box>
          <h3>
            <Link to="/adventure">
              <MountainsIcon />
              Adventure
            </Link>
          </h3>
        </Box>
        <BlogWithFeatPosts posts={featAdventurePosts} />
        <div css={btnCss}>
          <Button to="/adventure">All adventure posts</Button>
        </div>
      </section>
    </section>
  );
};

const Home: React.FC<PageProps> = ({ data }) => {
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
      <Header />
      <main>
        <NameAndBio />
        {/* <TruthAndLies /> */}
        <Projects />
        <Writing posts={posts} />
      </main>
      <Footer />
    </GlobalStyles>
  );
};

export default Home;

export const codeFeaturedQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { featured: { eq: true } } }) {
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
