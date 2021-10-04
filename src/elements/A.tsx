import { ReactNode } from 'react';
import { Link } from 'gatsby';
import { ElementProps } from '@/types';
import { css } from '@emotion/react';
import { color } from '@/constants';

// const aCss = css`
//   color: var(--color-text-body);
//   text-decoration: none;
//   border-bottom: 3px solid var(--color-punch-dim);
//   white-space: nowrap;

//   &:hover {
//     color: var(--color-punch-dark);
//     border-bottom-color: var(--color-punch);
//   }

//   ${sx}
// `;

const LINK_CSS = css`
  cursor: pointer;
  text-decoration: none;

  // Prevents color change when a link has been visited
  &:visited {
    color: inherit;
  }
`;

const BODY_CSS = css`
  color: ${color.fontPrimary};

  &:visited {
    color: ${color.fontPrimary};
  }
`;

const INHERIT_CSS = css`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-family: inherit;

  &:visited {
    color: inherit;
  }
`;

type AVariants = 'body' | 'inherit';

type AProps = {
  to: string;
  children: ReactNode;
  variant?: AVariants;
} & ElementProps;

export const A = ({ to, children, className, id, dataTestId, sx, variant = 'body' }: AProps) => {
  const composedCss = [LINK_CSS, getVariantCss(variant), sx];
  const linkProps = { className, id, dataTestId, children };

  // Gatsby's Link component should only be passed internal links so it can preload them
  const isExternal = to.match(/^http/);

  if (isExternal) return <a href={to} css={composedCss} {...linkProps} />;
  else return <Link to={to} {...linkProps} css={[LINK_CSS, getVariantCss(variant), sx]} />;
};

function getVariantCss(variant: AVariants) {
  switch (variant) {
    case 'body':
      return BODY_CSS;
    case 'inherit':
      return INHERIT_CSS;
  }
}
