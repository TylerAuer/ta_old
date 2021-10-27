import { ReactNode } from 'react';
import { Link } from 'gatsby';
import { ElementProps } from '@/types';
import { css, SerializedStyles } from '@emotion/react';
import { color } from '@/constants';

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
  const linkProps = { className, id, dataTestId, children };

  // Gatsby's Link component should only be passed internal links so it can preload them
  const isExternal = to.match(/^http/);

  if (isExternal) return <a href={to} css={composedCss} {...linkProps} />;
  else return <Link to={to} {...linkProps} css={composedCss} />;
};
