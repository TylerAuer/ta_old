import { color, fontFamily, fontSize } from '@/constants';
import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { ReactNode } from 'react';

const h1Css = css`
  ${fontSize.xxl};
  ${fontFamily.heading};
  ${color.font.primary};
`;

const h2Css = css`
  ${fontSize.xl};
  ${fontFamily.heading};
  ${color.font.secondary};
`;

const h3Css = css`
  ${fontSize.lg};
  ${fontFamily.heading};
  ${color.font.base};
`;

const h4Css = css`
  ${fontSize.md};
  ${fontFamily.heading};
  ${color.font.secondary};
`;

type HeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  sx?: SerializedStyles;
  id?: string;
  className?: string;
};

export const Heading = ({ children, level = 2, sx, id, className }: HeadingProps) => {
  const hProps = { id, className, sx };

  switch (level) {
    case 1:
      return <H1 {...hProps}>{children}</H1>;
    case 2:
      return <H2 {...hProps}>{children}</H2>;
    case 3:
      return <H3 {...hProps}>{children}</H3>;
    case 4:
      return <H4 {...hProps}>{children}</H4>;
  }
};

type HProps = {
  children: ReactNode;
  sx?: SerializedStyles;
  id?: string;
  className?: string;
};

// These each need to be their own separate components so they can be used in
// the MDX provider to map markdown to the correct element.
export const H1 = ({ children, sx, id, className }: HProps) => (
  <h1 id={id} className={className} css={[h1Css, sx]}>
    {children}
  </h1>
);

export const H2 = ({ children, sx, id, className }: HProps) => (
  <h2 id={id} className={className} css={[h2Css, sx]}>
    {children}
  </h2>
);

export const H3 = ({ children, sx, id, className }: HProps) => (
  <h3 id={id} className={className} css={[h3Css, sx]}>
    {children}
  </h3>
);

export const H4 = ({ children, sx, id, className }: HProps) => (
  <h4 id={id} className={className} css={[h4Css, sx]}>
    {children}
  </h4>
);
