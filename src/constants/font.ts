type Sizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const sansSerif = "'nunito', sans-serif";
const mono = "'JetBrains mono', serif";

const size: { [key in Sizes]: string } = {
  xxs: '1.2rem',
  xs: '1.5rem',
  sm: '1.8rem',
  md: '2.0rem',
  lg: '2.4rem',
  xl: '2.8rem',
  xxl: '3.2rem',
};

const family = {
  body: sansSerif,
  heading: mono,
  code: mono,
};

const weight = {
  normal: 'normal',
  bold: '600',
  bolder: '800',
};

export const font = {
  size,
  weight,
  family,
};
