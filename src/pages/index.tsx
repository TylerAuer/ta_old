import React from 'react';
import { PageProps } from 'gatsby';

import { GlobalStyles } from '@/components/GlobalStyles';
import { SetWidth } from '@/components/SetWidth';
import { Header } from '@/components/Nav';

const Home: React.FC<PageProps> = () => (
  <GlobalStyles>
    <Header />
    <main>
      <section>
        <SetWidth>
          <h1>Tyler Auer</h1>
          <div>Teacher turned software developer</div>

          <p>
            After teaching math for twelve years, I taught myself to code. At{' '}
            <a href="nextdoor.com">Nextdoor</a>, I build systems to help
            developers move fast and effectively. At home, I enjoy creating
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
      <section>
        <SetWidth>
          <h2>Favorite Projects</h2>
          <h3>Bad Calculators</h3>
          <p>
            A collection of puzzles built with pitifully, painfully, unhelpful,
            bad calculators.
          </p>
          <h3>Fruit Matrix</h3>
          <p>
            Rate fruit based on tastiness and ease of eating then see how your
            ratings compare to everyone else's with detailed analytics in this
            full-stack app inspired by XKCD and the NYTimes.
          </p>
          <h3>Super Stupid Props Charity Game</h3>
          <p>
            A Super Bowl props game where the winner selects a charity to donate
            a community pot. In 2021 we donated $1,568 to the Pancreatic Cancer
            Action Network.
          </p>
        </SetWidth>
      </section>
      <section>
        <SetWidth>
          <h2>Blogging</h2>
          <h3>Code</h3>
          <h4>Linked Lists</h4>
          <p>Are they lists, really?</p>
          <h4>What the heck is a $PATH</h4>
          <p>I'm not sure I know.</p>
          <h4>On changing careers</h4>
          <p>If you want to, you should (with caveats).</p>
        </SetWidth>
      </section>
    </main>
  </GlobalStyles>
);

export default Home;
