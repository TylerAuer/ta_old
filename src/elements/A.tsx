import { ReactNode } from 'react';
import { Link } from 'gatsby';
import { ElementProps } from '@/types';
import { css } from '@emotion/react';
import { color } from '@/constants/';

const LINK_CSS = css`
  cursor: pointer;
  text-decoration: none;
  color: ${color.fontPrimary};
  &:hover {
    color: ${color.fontSecondary};
  }
`;

type AProps = {
  to: string;
  children: ReactNode;
} & ElementProps;

export const A = ({ to, children, className, id, dataTestId, sx }: AProps) => {
  const composedCss = [LINK_CSS, sx];
  const linkProps = { className, id, 'data-testid': dataTestId, children };

  // Gatsby's Link component should only be passed internal links so it can preload them
  const isExternal = to.match(/^http/);

  return isExternal ? (
    <a href={to} css={composedCss} {...linkProps} />
  ) : (
    <Link to={to} {...linkProps} css={composedCss} />
  );
};
