import { Global, css } from '@emotion/react';
import { Helmet } from 'react-helmet';

import { GlobalStyles } from '@/components/GlobalStyles';
import { Bookshelf } from '@/components/bookshelf/Bookshelf';

const BookshelfPage: React.FC = () => (
  <GlobalStyles>
    <Global
      styles={css`
        body {
          overflow-y: scroll;
        }
      `}
    />
    <Helmet>
      <title>Bookshelf - Tyler Auer</title>
      <meta name="description" content="Tyler's favorite books" />
    </Helmet>
    <main>
      <Bookshelf />
    </main>
  </GlobalStyles>
);

export default BookshelfPage;
