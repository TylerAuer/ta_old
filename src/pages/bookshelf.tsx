import { useState } from 'react';
import { Helmet } from 'react-helmet';

import { GlobalStyles } from '@/components/GlobalStyles';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Bookshelf } from '@/bookshelf/Bookshelf';

const BookshelfPage: React.FC = () => (
  <GlobalStyles>
    <Helmet>
      <title>Bookshelf - Tyler Auer</title>
      <meta name="description" content="Tyler's favorite books" />
    </Helmet>
    <Header />
    <main>
      <Bookshelf />
    </main>
    <Footer />
  </GlobalStyles>
);

export default BookshelfPage;
