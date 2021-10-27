import { css } from '@emotion/react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import { A } from '@/elements/A';
import { color, font } from '@/constants';
import { Heading } from '@/elements';
import { BookFromGQLType } from '@/types';

const MODAL_BG_SX = css`
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${color.bgBaseTransparent(0.9)};
  backdrop-filter: blur(10px);
`;

const CONTAINER_SX = css`
  // Just for vertical centering
  // keep this separate to avoid wonky formatting when wrapping
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const TITLE_SX = css`
  font-family: ${font.family.body};
  color: ${color.fontPrimary};
`;

const LINK_SX = css`
  font-size: ${font.size.sm};

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;

const AUTHOR_SX = css`
  font-weight: ${font.weight.bold};
  margin-bottom: 2rem;
`;

const DISMISS_SX = css`
  position: absolute;
  right: 0;
  top: 0;
  color: ${color.fontPrimaryDark};
  font-size: 4rem;
  cursor: pointer;
  margin: 0;
  padding: 0;
  line-height: 0;

  &:hover {
    color: ${color.fontPrimaryDark};
  }
`;

const CONTENT_SX = css`
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  color: ${color.fontBase};
`;

const COVER_SX = css`
  width: 250px;
  max-width: 95%;
  margin: 0 3rem;
  border-radius: 10px;
`;

const DETAILS_SX = css`
  width: 500px;
  max-width: 95%;
`;

type Props = {
  book: BookFromGQLType;
  closeModal: () => void;
};

export const BookModal: React.FC<Props> = ({ book, closeModal }) => {
  return (
    <div css={MODAL_BG_SX} id="book-modal">
      <div css={CONTAINER_SX}>
        <div css={CONTENT_SX}>
          <div css={DISMISS_SX} onClick={closeModal}>
            &times;
          </div>
          <GatsbyImage css={COVER_SX} alt={book.title} image={getImage(book.cover)} />
          <div css={DETAILS_SX}>
            <Heading level={2} sx={TITLE_SX}>
              {book.title}
            </Heading>
            <div css={AUTHOR_SX}>{book.author}</div>
            <div>{book.pages} pages</div>
            <BookSiteLink text="Goodreads" url={book.goodreads_url} />
            <BookSiteLink text="IndieBound" url={book.indiebound_url} />
            <BookSiteLink text="Library" url={book.library_url} />
          </div>
        </div>
      </div>
    </div>
  );
};

type BookSiteLinkProps = {
  text: string;
  url: string;
};

const BookSiteLink = ({ text, url }: BookSiteLinkProps) => (
  <A sx={LINK_SX} to={url}>
    {text}
  </A>
);
