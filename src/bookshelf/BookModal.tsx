import { css } from '@emotion/react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import { A } from '@/elements/A';
import { color, font } from '@/constants';

type Props = {
  book: any;
  closeModal: () => void;
};

export const BookModal: React.FC<Props> = ({ book, closeModal }) => {
  const s = css`
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    z-index: 100;

    background-color: rgba(${color.bgBase} (0.9));
    backdrop-filter: blur(20px);

    & .content-container {
      // Just for vertical centering
      // keep this separate to avoid wonky formatting when wrapping
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
    }
    & .dismiss {
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
    }

    & .contents {
      width: 95%;
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      position: relative;
    }

    & .cover {
      width: 250px;
      max-width: 95%;
      margin: 0 3rem;
      border-radius: 10px;
    }

    & .details {
      width: 500px;
      max-width: 95%;
    }

    & .title {
      ${font.family.body}
      color: ${color.fontPrimary}
    }

    & .author {
      font-weight: 600;
      margin-bottom: 2rem;
    }

    & .pages,
    .link {
      font-size: 1.6rem;
    }

    & .link:not(:first-of-type) {
      margin-left: 1rem;
    }
  `;

  return (
    <div css={s} id="book-modal">
      <div className="content-container">
        <div className="contents">
          <div className="dismiss" onClick={closeModal}>
            &times;
          </div>
          <GatsbyImage className="cover" alt={book.title} image={getImage(book.cover)} />
          <div className="details">
            <h2 className="title">{book.title}</h2>
            <div className="author">{book.author}</div>
            <div className="pages">{book.pages} pages</div>
            <A className="link" to={book.goodreads_url}>
              Goodreads
            </A>
            <A className="link" to={book.indiebound_url}>
              IndieBound
            </A>
            <A className="link" to={book.library_url}>
              Library
            </A>
          </div>
        </div>
      </div>
    </div>
  );
};
