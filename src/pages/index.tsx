import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { css } from '@emotion/react';

import { GlobalStyles } from '@/components/GlobalStyles';
import { Box } from '@/components/Box';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PostPreview } from '@/components/PostPreview';

const blogTitleStyle = css`
  margin: 0;
`;

const NameAndBio = () => (
  <section id="name-and-bio">
    <h1>Tyler Auer</h1>
    <Box
      css={css`
        font-family: var(--font-special);
      `}
    >
      Teacher turned software developer
    </Box>

    <p>
      After teaching math for twelve years, I taught myself to code. Now I build systems to help
      developers at <a href="nextdoor.com">Nextdoor</a> move fast. I also enjoy creating puzzles,
      games, and interactives.
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
      A collection of puzzles built from painfully bad calculators with 150k puzzle attempts by
      users.
    </p>
    <h3>Fruit Matrix</h3>
    <p>
      Rate fruit based on tastiness and ease of eating then see how your ratings compare to everyone
      else's with detailed analytics in this full-stack app inspired by XKCD and the NYTimes.
    </p>

    <h3>Super Stupid Props Charity Game</h3>

    <p>
      A Super Bowl props game where players optionally contribute to a community pot and the winner
      selects a charity to donate the pot to. In 2021 we donated $1,568 to the Pancreatic Cancer
      Action Network! <Link to="/">Sign up</Link> to play next year; donations optional.
    </p>
  </section>
);

const BlogWithFeatPosts = ({ title, posts }) => {
  return (
    <section id={`${title.toLowerCase()}-featured-posts`}>
      <h3>{title}</h3>
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
    <section id="Writing">
      <h2>Writing</h2>
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
