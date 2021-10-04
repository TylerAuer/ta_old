import { css } from '@emotion/react';

import { Box } from '@/elements/Box';
import { spacing } from '@/constants';
import { IconNavList } from './IconNavList';

type PropsType = {
  includeHomeLink?: boolean;
};

export function Footer({ includeHomeLink = true }: PropsType) {
  const s = css`
    margin: 20rem auto 5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & div {
      & .name {
        font-size: 3rem;
        color: var(--color-punch);
        font-family: var(--font-special);
        line-height: 1;
      }
      & .desc {
        font-style: italic;
      }
    }

    & nav {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & img {
      width: 2.5rem;
      margin: 1rem 2.5rem;
    }
  `;

  return (
    <footer>
      <Box sx={s} vMargin={'xxxl'}>
        <div>
          <div className="name">Tyler Auer</div>
          <div className="desc">Teacher turned developer</div>
        </div>
        <IconNavList includeHomeLink={includeHomeLink} />
      </Box>
    </footer>
  );
}
