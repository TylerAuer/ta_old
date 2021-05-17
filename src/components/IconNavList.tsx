import { Link } from 'gatsby';
import { css } from '@emotion/react';

import { Icon } from '@/components/Icon';

import { SPACING } from '@/constants';

type Props = {
  includeHomeLink?: boolean;
};

export const IconNavList: React.FC<Props> = ({ includeHomeLink = false }) => {
  const s = css`
    & a {
      margin: 0 ${SPACING.md};
    }

    & img {
      display: inline-block;
      width: 3rem;
    }
  `;

  return (
    <nav css={s}>
      {includeHomeLink && (
        <Link to="/">
          <Icon icon="home" />
        </Link>
      )}
      <a href="https://github.com/TylerAuer">
        <Icon icon="github" />
      </a>
      <a href="https://twitter.com/TylerAuer">
        <Icon icon="twitter" />
      </a>
      <Link to="/code">
        <Icon icon="code" />
      </Link>
      <Link to="/adventure">
        <Icon icon="mountains" />
      </Link>
      <Link to="/bookshelf">
        <Icon icon="book" />
      </Link>
    </nav>
  );
};
