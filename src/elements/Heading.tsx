import { color, font, spacing } from '@/constants';
import { ElementProps, HeadingLevelsType } from '@/types';
import { css } from '@emotion/react';
import { SerializedStyles } from '@emotion/utils';
import { ReactNode } from 'react';

const hCss = css`
  line-height: 1.4;
`;

const h1Css = css`
  ${hCss}
  font-size: ${font.size.xxl};
  font-family: ${font.family.heading};
  color: ${color.fontPrimary};
  margin: ${spacing.xl} 0;
`;

const h2Css = css`
  ${hCss}
  font-size: ${font.size.xl};
  font-family: ${font.family.heading};
  color: ${color.fontSecondary};
  margin: ${spacing.huge} 0;
`;

const h3Css = css`
  ${hCss}
  font-size: ${font.size.lg};
  font-family: ${font.family.heading};
  color: ${color.fontPrimary};
  margin: ${spacing.md} 0;
`;

const h4Css = css`
  ${hCss}
  font-size: ${font.size.md};
  font-family: ${font.family.heading};
  color: ${color.fontSecondary};
  margin: ${spacing.md} 0;
`;

type HeadingProps = {
  children: ReactNode;
  level?: HeadingLevelsType;
  sx?: SerializedStyles;
} & ElementProps;

export const Heading = ({ children, level = 2, sx, id, className, dataTestId }: HeadingProps) => {
  const hProps = { id, className, sx, dataTestId };

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
} & ElementProps;

// These each need to be their own separate components so they can be used in
// the MDX provider to map markdown to the correct element.
export const H1 = ({ children, sx, id, className, dataTestId }: HProps) => (
  <h1 id={id} className={className} data-testid={dataTestId} css={[h1Css, sx]}>
    {children}
  </h1>
);

export const H2 = ({ children, sx, id, className, dataTestId }: HProps) => (
  <h2 id={id} className={className} data-testid={dataTestId} css={[h2Css, sx]}>
    {children}
  </h2>
);

export const H3 = ({ children, sx, id, className, dataTestId }: HProps) => (
  <h3 id={id} className={className} data-testid={dataTestId} css={[h3Css, sx]}>
    {children}
  </h3>
);

export const H4 = ({ children, sx, id, className, dataTestId }: HProps) => (
  <h4 id={id} className={className} data-testid={dataTestId} css={[h4Css, sx]}>
    {children}
  </h4>
);
