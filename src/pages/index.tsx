import React from 'react';
import { PageProps } from 'gatsby';

import { GlobalStyles } from '@/components/GlobalStyles';
import { SetWidth, Widths } from '@/components/SetWidth';
import { Flex, FlexJustification } from '@/components/Flex';

const Home: React.FC<PageProps> = () => (
  <GlobalStyles>
    <nav>
      <SetWidth>
        <Flex flex={FlexJustification.split}>
          <div>Logo</div>
          <div>Nav</div>
        </Flex>
      </SetWidth>
    </nav>
    <main>
      <SetWidth>
        <h1>Tyler Auer</h1>
        <h2>Teacher turned software developer</h2>

        <p>
          After teaching math for twelve years, Tyler taught himself to code. He
          enjoys building systems to help developers move fast working in React
          and on the backend.
        </p>
      </SetWidth>
    </main>
  </GlobalStyles>
);

export default Home;
