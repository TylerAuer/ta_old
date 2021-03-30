import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import { GlobalStyles } from '@/components/GlobalStyles';
import { SetWidth } from '@/components/SetWidth';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Chip } from '@/components/Chip';

const FeaturedPost = ({ post }) => {
  const { date_created, title, subtitle, category, tags, location } = post.frontmatter;
  const { blog } = post.fields;

  return (
    <article>
      <h4>{title}</h4>
      <div>{subtitle}</div>
      {location && <div>{location}</div>}
      {tags.map((tag) => (
        <Chip to={`/${blog}/tag/${tag.toLowerCase()}`}>{tag}</Chip>
      ))}
    </article>
  );
};

const Home: React.FC<PageProps> = ({ data }) => {
  const posts = data.allMdx.nodes;
  const featuredCodePosts = posts.filter((post) => post.fields.blog === 'code');
  const featuredAdventurePosts = posts.filter((post) => post.fields.blog === 'adventure');

  return (
    <GlobalStyles>
      <Header />
      <main>
        <section id="about">
          <SetWidth>
            <h1>Tyler Auer</h1>
            <div>Teacher turned software developer</div>

            <p>
              After teaching math for twelve years, I taught myself to code. Now I build systems to
              help developers at <a href="nextdoor.com">Nextdoor</a> move fast. I also enjoy
              creating puzzles, games, and interactives.
            </p>
            <div>Two Thirds Truth and One Third Lies About Me</div>
            <ul>
              <li>I love bread</li>
              <li>I own over 100 board games</li>
              <li>Has been pushed through the ocean by dolphins</li>
            </ul>
          </SetWidth>
        </section>
        <section id="projects">
          <SetWidth>
            <h2>Projects</h2>
            <h3>Bad Calculators</h3>
            <p>
              A collection of puzzles built from painfully bad calculators with 150k puzzle attempts
              by users.
            </p>
            <h3>Fruit Matrix</h3>
            <p>
              Rate fruit based on tastiness and ease of eating then see how your ratings compare to
              everyone else's with detailed analytics in this full-stack app inspired by XKCD and
              the NYTimes.
            </p>
            <h3>Super Stupid Props Charity Game</h3>
            <p>
              A Super Bowl props game where players optionally contribute to a community pot and the
              winner selects a charity to donate the pot to. In 2021 we donated $1,568 to the
              Pancreatic Cancer Action Network! <Link to="/">Sign up</Link> to play next year;
              donations optional.
            </p>
          </SetWidth>
        </section>
        <section id="blogs">
          <SetWidth>
            <h2>Writing</h2>
            <section>
              <h3>Code Blog</h3>
              {featuredCodePosts.map((post) => (
                <FeaturedPost post={post} />
              ))}
            </section>
            <section>
              <h3>Adventure Blog</h3>
              {featuredAdventurePosts.map((post) => (
                <FeaturedPost post={post} />
              ))}
            </section>
          </SetWidth>
        </section>
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
