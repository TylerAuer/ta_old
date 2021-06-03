import { Link } from 'gatsby';
import { css } from '@emotion/react';

import { Icon } from '@/components/Icon';

import { SPACING } from '@/constants';

type Props = {
  includeHomeLink?: boolean;
};

export const IconNavList: React.FC<Props> = ({ includeHomeLink = true }) => {
  const s = css`
    & a {
      margin: 0 ${SPACING.md};
      width: 3rem;
      display: inline-block;

      @media only screen and (max-width: 450px) {
        margin: 0 ${SPACING.md};
      }
    }
  `;

  return (
    <nav css={s}>
      {includeHomeLink && (
        <Link to="/">
          <span className="visible-hidden">Home</span>
          <Icon icon="home" />
        </Link>
      )}
      <Link to="/code">
        <span className="visible-hidden">Code blog</span>
        <Icon icon="code" />
      </Link>
      <Link to="/adventure">
        <span className="visible-hidden">Adventure blog</span>
        <Icon icon="mountains" />
      </Link>
      <Link to="/bookshelf">
        <span className="visible-hidden">Bookshelf</span>
        <Icon icon="book" />
      </Link>
      <a href="https://twitter.com/TylerAuer">
        <span className="visible-hidden">Twitter</span>
        <Icon icon="twitter" />
      </a>
      <a href="https://github.com/TylerAuer">
        <span className="visible-hidden">GitHub</span>
        <Icon icon="github" />
      </a>
    </nav>
  );
};
