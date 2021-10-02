import { StyleConstantObject as StyleConstantObject } from '@/types';
import { css, SerializedStyles } from '@emotion/react';

type Sizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const fontSize: StyleConstantObject = {
  xxs: css`
    font-size: 12px;
  `,
  xs: css`
    font-size: 15px;
  `,
  sm: css`
    font-size: 18px;
  `,
  md: css`
    font-size: 20px;
  `,
  lg: css`
    font-size: 24px;
  `,
  xl: css`
    font-size: 32px;
  `,
  xxl: css`
    font-size: 36px;
  `,
};

export const fontFamily: StyleConstantObject = {
  body: css`
    font-family: 'nunito', sans-serif;
  `,
  heading: css`
    font-family: 'JetBrains mono', serif;
  `,
  code: css`
    font-family: 'JetBrains mono', serif;
  `,
};
