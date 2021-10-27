import { css } from '@emotion/react';

import { Icon } from '@/elements/Icon';

import { spacing } from '@/constants';
import { A } from '@/elements/A';

type Props = {
  includeHomeLink?: boolean;
};

export const IconNavList: React.FC<Props> = ({ includeHomeLink = true }) => {
  const s = css`
    & a {
      margin: 0 ${spacing.md};
      width: 3rem;
      display: inline-block;

      @media only screen and (max-width: 450px) {
        margin: 0 ${spacing.md};
      }
    }
  `;

  return (
    <nav css={s}>
      {includeHomeLink && (
        <A to="/">
          <span className="visible-hidden">Home</span>
          <Icon icon="home" />
        </A>
      )}
      <A to="/code">
        <span className="visible-hidden">Code blog</span>
        <Icon icon="code" />
      </A>
      <A to="/adventure">
        <span className="visible-hidden">Adventure blog</span>
        <Icon icon="mountains" />
      </A>
      <A to="/bookshelf">
        <span className="visible-hidden">Bookshelf</span>
        <Icon icon="book" />
      </A>
      <A to="https://twitter.com/TylerAuer">
        <span className="visible-hidden">Twitter</span>
        <Icon icon="twitter" />
      </A>
      <A to="https://github.com/TylerAuer">
        <span className="visible-hidden">GitHub</span>
        <Icon icon="github" />
      </A>
    </nav>
  );
};
