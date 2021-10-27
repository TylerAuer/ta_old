import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';

import { TruthOrLie, truthsAndLies } from '../../data/truths_and_lies_list';
import { font, spacing } from '@/constants';
import { HeadingRow } from '@/elements';
import { fisherYatesShuffle } from '@/utils/fisher_yates_shuffle';

const tolRowCss = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const statementCss = css`
  font-size: ${font.size.md};
`;

const chooserContainerCss = css`
  width: 150px;
  vertical-align: middle;
`;

const buttonCss = css`
  background: none;
  border: none;
  font-size: ${font.size.xxl};
  vertical-align: middle;
  cursor: pointer;
`;

const orCss = css`
  margin: ${spacing.xl};
  font-size: ${font.size.lg};
  vertical-align: middle;
`;

type TruthsAndLiesProps = {
  count?: number;
};

const shuffledIds = fisherYatesShuffle(Object.keys(truthsAndLies));

export const TruthsAndLies = ({ count = 3 }: TruthsAndLiesProps) => {
  const [shuffledStartIdx, setShuffledStartIdx] = useState(0);
  const shuffledEndIdx = Math.min(shuffledStartIdx + count, shuffledIds.length - 1);

  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const currentShuffledIds = shuffledIds.slice(
    shuffledStartIdx,
    Math.min(shuffledStartIdx + count, shuffledIds.length),
  );

  const Score = useCallback(
    () => (
      <div>
        {rightCount} / {rightCount + wrongCount}
      </div>
    ),
    [rightCount, wrongCount],
  );

  const onRight = (shuffleIdx: number) => {
    setRightCount((prev) => prev + 1);
    alert('Correct!');
    truthsAndLies[shuffledIds[shuffleIdx]].answeredCorrectly = true;
  };

  const onWrong = (shuffleIdx: number) => {
    setWrongCount((prev) => prev + 1);
    alert('Wrong!');
    truthsAndLies[shuffledIds[shuffleIdx]].answeredCorrectly = false;
  };

  // const getMore = () => {
  //   const newStartIdx = Math.min(index + count, shuffledIds.length - 1);
  //   setIndex(newStartIdx);
  // };

  return (
    <div>
      <HeadingRow level={2} title="Truth Or Lie?" rightNode={<Score />} />
      <div>
        {currentShuffledIds
          .map((id) => truthsAndLies[id])
          .map((truthOrLie) => (
            <TruthOrLieRow truthOrLie={truthOrLie} onRight={onRight} onWrong={onWrong} />
          ))}
      </div>
    </div>
  );
};

type TruthOrLieRowProps = {
  onRight: (id: number) => void;
  onWrong: (id: number) => void;
  truthOrLie: TruthOrLie;
};

function TruthOrLieRow({ truthOrLie, onRight, onWrong }: TruthOrLieRowProps) {
  return (
    <div css={tolRowCss} key={truthOrLie.statement}>
      <TruthOrLieChooser truthOrLie={truthOrLie} onRight={onRight} onWrong={onWrong} />
      <span css={statementCss}>Tyler {truthOrLie.statement}</span>
    </div>
  );
}

type TruthOrLieChooserProps = {
  onRight: (id: number) => void;
  onWrong: (id: number) => void;
  truthOrLie: TruthOrLie;
};

function TruthOrLieChooser({ onRight, onWrong, truthOrLie }: TruthOrLieChooserProps) {
  const handleChoice = (guess: boolean) => {
    const { id } = truthOrLie;
    guess === truthOrLie.truthyness ? onRight(id) : onWrong(id);
  };

  return (
    <div css={chooserContainerCss}>
      <button onClick={() => handleChoice(true)} css={buttonCss}>
        😇
      </button>
      <span css={orCss}>/</span>
      <button onClick={() => handleChoice(false)} css={buttonCss}>
        👿
      </button>
    </div>
  );
}
