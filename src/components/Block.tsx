import { SPACING } from '@/constants';
import { css, SerializedStyles } from '@emotion/react';
import { Box } from './Box';

interface Props {
  sx?: SerializedStyles;
  style?: 'note' | 'warning';
  className?: string;
  id?: string;
}

export const Block: React.FC<Props> = ({ children, sx, className, id, style = 'note' }) => {
  const s = css`
    padding: 1rem 2rem;
    border: none;
    background: var(--color-grey-bg);
    border-radius: 5px;
    border-left: 10px solid var(--color-punch);
    font-size: 1.6rem;
    color: #282828;
    font-family: var(--font-special);
    margin: ${SPACING.xl} 0;
    /* box-shadow: 2px 2px var(--color-punch); */

    // Pass any styles on and override defaults
    ${sx}
  `;

  return (
    <Box className={className} id={id}>
      <div css={s}>{children}</div>
    </Box>
  );
};
