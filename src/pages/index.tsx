import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { css } from '@emotion/react';
import { SPACING } from '@/constants';

import { GlobalStyles } from '@/components/GlobalStyles';
import { Box } from '@/components/Box';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PostPreview } from '@/components/PostPreview';

const titleCss = css`
  margin: 0.5rem auto;
`;

const subtitleCss = css`
  font-family: var(--font-special);
  font-size: 1.8rem;
  margin-bottom: ${SPACING.xl};
`;

const NameAndBio = () => (
  <section id="name-and-bio">
    <h1 css={titleCss}>Tyler Auer</h1>
    <Box css={subtitleCss}>Teacher turned software developer</Box>
    <p>
      After teaching math for twelve years, I taught myself to code. Now I build infrastructure to
      help developers at <a href="nextdoor.com">Nextdoor</a> ship features efficiently.
    </p>
    <p>
      When not staring at a screen I enjoy reading sci-fi and fantasy series, making puzzles, and
      long walks on exposed ridgelines.
    </p>
  </section>
);

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

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <h3>Bad Calculators</h3>
    <p>
      Mathy puzzles on pitiful, miserable calculators. These brain melters are addictive: ~5K users
      have amassed over 150k puzzle attempts. Bring a pencil and paper (or a BFS algorithm).
    </p>

    <h3>Super Stupid Props Charity Game</h3>
    <p>
      A Super Bowl props game where players optionally contribute to a community pot and the winner
      selects a charity to donate the pot to. In 2021 we donated $1,568 to the Pancreatic Cancer
      Action Network! <Link to="/">Sign up</Link> to play next year; donations optional.
    </p>

    <h3>Fruit Matrix</h3>
    <p>
      Drag-and-drop fruit on a two-axis graph to rate each type's tastiness and easeof eating.
      Submit your ratings and get hit with a smorgasbord of unnecessarily involved{' '}
      <Link to="https://fruit.tylerauer.com/#/data/#histograms">charts</Link> aggregating every
      rating the site has ever seen.
    </p>
  </section>
);

const BlogWithFeatPosts = ({ title, posts }) => {
  return (
    <section id={`${title.toLowerCase()}-featured-posts`}>
      <h2>{title}</h2>
      <Box id="adventure-writing">
        {posts.map((post) => (
          <PostPreview key={post.fields.path} post={post} />
        ))}
      </Box>
    </section>
  );
};

const Writing = ({ posts }) => {
  const featCodePosts = posts.filter((post) => post.fields.blog === 'code');
  const featAdventurePosts = posts.filter((post) => post.fields.blog === 'adventure');

  return (
    <section id="blogs">
      <BlogWithFeatPosts title="Code" posts={featCodePosts} />
      <BlogWithFeatPosts title="Adventure" posts={featAdventurePosts} />
    </section>
  );
};

const Home: React.FC<PageProps> = ({ data }) => {
  const posts = data.allMdx.nodes;
  return (
    <GlobalStyles>
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
