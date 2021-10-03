import React from 'react';
import { css } from '@emotion/react';
import { ElementProps } from '@/types';

type Props = {
  content: string;
  state: boolean;
  onClick: () => void;
} & ElementProps;

export const Toggle: React.FC<Props> = ({ onClick, state, content, sx, id, className = '' }) => {
  const s = css`
    padding: 5px 10px;
    margin: 4px;
    border: none;
    border-radius: 20px;
    font-size: 1.3rem;
    color: #282828;
    font-family: var(--font-special);
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 400;

    &.active {
      background: var(--color-punch-bright);
      &:hover {
        background: var(--color-punch-bg);
        color: black;
      }
    }
    &.inactive {
      &:hover {
        background: var(--color-grey-bg-medium);
        color: black;
      }
    }

    // Pass any styles on and override defaults
    ${sx}
  `;

  return (
    <button
      css={s}
      id={id}
      className={`${className} ${state ? 'active' : 'inactive'}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
