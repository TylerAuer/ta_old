import React from 'react';
import { css } from '@emotion/react';

import { P } from '@/elements/P';

export const DropCapP: React.FC = ({ children }) => {
  const pArray = children.toString().split(' ');
  const firstWord = pArray[0];
  const restOfP = pArray.slice(1).join(' ');

  const wordByChar = firstWord.toString().split('');

  const dc = wordByChar.length > 2 ? wordByChar[0] : wordByChar;
  const rest = wordByChar.length > 2 ? wordByChar.slice(1) : null;

  const visibleOnlyToScreenReaders = css`
    &:not(:focus):not(:active) {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  `;

  return (
    <P>
      <span aria-hidden="true">
        <span
          css={css`
            float: left;
            font-size: 5.7rem;
            font-family: var(--font-special);
            border-left: 3px solid var(--color-punch);
            border-top: 3px solid var(--color-punch);
            margin-right: 1rem;
            line-height: 1;
            text-transform: uppercase;
          `}
        >
          {dc}
        </span>
        {rest}
      </span>
      <span css={visibleOnlyToScreenReaders}>{firstWord}</span> {restOfP}
    </P>
  );
};
