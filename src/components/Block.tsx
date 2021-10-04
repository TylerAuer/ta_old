import { spacing, color } from '@/constants';
import { css } from '@emotion/react';
import { Box } from '../elements/Box';

import { ElementProps } from '@/types';

type Props = {
  style?: 'note' | 'warning';
} & ElementProps;

export const Block: React.FC<Props> = ({ children, sx, className, id, style = 'note' }) => {
  const s = css`
    padding: 1rem 2rem;
    border: none;
    color: ${color.bgBaseDark};
    border-radius: 5px;
    border-left: 10px solid ${color.borderPrimary};
    font-size: 1.6rem;
    color: #282828;
    font-family: var(--font-special);
    margin: ${spacing.xl} 0;
    /* box-shadow: 2px 2px var(--color-punch); */

    ${sx}
  `;

  return (
    <Box className={className} id={id}>
      <div css={s}>{children}</div>
    </Box>
  );
};
