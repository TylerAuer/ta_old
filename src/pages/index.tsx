import React from 'react';
import { Link, PageProps } from 'gatsby';

import { GlobalStyles } from '@/components/GlobalStyles';
import { SetWidth } from '@/components/SetWidth';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Home: React.FC<PageProps> = () => (
  <GlobalStyles>
    <Header />
    <main>
      <section id="about">
        <SetWidth>
          <h1>Tyler Auer</h1>
          <div>Teacher turned software developer</div>

          <p>
            After teaching math for twelve years, I taught myself to code. Now I
            build systems to help developers at{' '}
            <a href="nextdoor.com">Nextdoor</a> move fast. I also enjoy creating
            puzzles, games, and interactives.
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
            A collection of puzzles built from painfully bad calculators with
            150k puzzle attempts by users.
          </p>
          <h3>Fruit Matrix</h3>
          <p>
            Rate fruit based on tastiness and ease of eating then see how your
            ratings compare to everyone else's with detailed analytics in this
            full-stack app inspired by XKCD and the NYTimes.
          </p>
          <h3>Super Stupid Props Charity Game</h3>
          <p>
            A Super Bowl props game where players optionally contribute to a
            community pot and the winner selects a charity to donate the pot to.
            In 2021 we donated $1,568 to the Pancreatic Cancer Action Network!{' '}
            <Link to="/">Sign up</Link> to play next year ; donations are
            optional.
          </p>
        </SetWidth>
      </section>
      <section id="blogs">
        <SetWidth>
          <h2>Blogs</h2>
          <article>
            <h3>Code</h3>
            <h4>Linked Lists</h4>
            <p>Are they lists, really?</p>
            <h4>What the heck is a $PATH</h4>
            <p>I'm not sure I know.</p>
            <h4>On changing careers</h4>
            <p>If you want to, you should (with caveats).</p>
          </article>
          <article>
            <h3>Adventure</h3>
            <h4>Cody Peak Scramble</h4>
            <p>More fun when the tram is running.</p>
            <h4>Cody Peak Scramble</h4>
            <p>More fun when the tram is running.</p>
          </article>
        </SetWidth>
      </section>
    </main>
    <Footer />
  </GlobalStyles>
);

export default Home;
