import { useState } from 'react';
import { css } from '@emotion/react';

import { TruthOrLie, truthsAndLiesList } from '../data/truths_and_lies_list';
import { Box } from '../elements/Box';

const tolRowCss = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  & > div {
    padding: 0 5px;
  }
`;

const tolStatementCss = css`
  flex-grow: 1;
`;

type TruthOrLieWithSeenState = {
  answeredCorrectly?: boolean;
} & TruthOrLie;

type TruthsAndLiesProps = {
  count?: number;
};

// TODO: Move to global state so not lost
const list: TruthOrLieWithSeenState[] = [...truthsAndLiesList];

export const TruthsAndLies = ({ count = 3 }: TruthsAndLiesProps) => {
  const [index, setIndex] = useState(0);
  const currentTOLs = list.slice(index, Math.min(index + count, list.length));

  const getMore = () => {
    const newStartIdx = Math.min(index + count, list.length - 1);
    setIndex(newStartIdx);
  };

  return (
    <Box>
      <h2>Truths & Lies</h2>
      <button onClick={getMore}>Shuffle</button>
      <Box>
        {currentTOLs.map((truthOrLie, idx) => (
          <div css={tolRowCss}>
            <div>X</div>
            <div css={tolStatementCss} key={idx}>
              {truthOrLie.statement}
            </div>
            <div>:) or :(</div>
          </div>
        ))}
      </Box>
    </Box>
  );
};
