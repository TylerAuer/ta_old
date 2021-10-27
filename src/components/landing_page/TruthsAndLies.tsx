import { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { TruthOrLie, truthsAndLies } from '../../data/truths_and_lies_list';
import { font, spacing } from '@/constants';
import { HeadingRow } from '@/elements';
import { fisherYatesShuffle } from '@/utils/fisher_yates_shuffle';

// TODO: Get more ToLs after and answer
// TODO: Need to figure out how to update the state; maybe the state should live in Right/Wrong component?

const scoreCss = css`
  font-size: ${font.size.md};
`;

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
  font-size: ${font.size.xl};
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

const shuffledIds = fisherYatesShuffle<number>(
  Object.keys(truthsAndLies).map((key) => Number(key)),
);

export const TruthsAndLies = ({ count = 3 }: TruthsAndLiesProps) => {
  const [shuffledStartIdx, setShuffledStartIdx] = useState(0);
  const shuffledEndIdx = Math.min(shuffledStartIdx + count, shuffledIds.length - 1);

  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const currentShuffledIds = shuffledIds.slice(
    shuffledStartIdx,
    Math.min(shuffledStartIdx + count, shuffledIds.length),
  );

  const Score = useCallback(() => {
    if (!rightCount && !wrongCount) return null;

    return (
      <div css={scoreCss}>
        {rightCount} / {rightCount + wrongCount}
      </div>
    );
  }, [rightCount, wrongCount]);

  const onRight = (shuffleIdx: number) => {
    setRightCount((prev) => prev + 1);
    truthsAndLies[shuffledIds[shuffleIdx]].answer = 'right';
  };

  const onWrong = (shuffleIdx: number) => {
    setWrongCount((prev) => prev + 1);
    truthsAndLies[shuffledIds[shuffleIdx]].answer = 'wrong';
  };

  // const getMore = () => {
  //   const newStartIdx = Math.min(index + count, shuffledIds.length - 1);
  //   setIndex(newStartIdx);
  // };

  console.log('TOL', truthsAndLies);

  return (
    <div>
      <HeadingRow level={2} title="Get to know the real me" rightNode={<Score />} />
      <div>
        {currentShuffledIds
          .map((id) => truthsAndLies[id])
          .map((truthOrLie) => (
            <TruthOrLieRow
              key={truthOrLie.id}
              truthOrLie={truthOrLie}
              onRight={onRight}
              onWrong={onWrong}
            />
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
      <span css={statementCss}>{truthOrLie.statement}</span>
    </div>
  );
}

type TruthOrLieChooserProps = {
  onRight: (id: number) => void;
  onWrong: (id: number) => void;
  truthOrLie: TruthOrLie;
};

function TruthOrLieChooser({ onRight, onWrong, truthOrLie }: TruthOrLieChooserProps) {
  const hasBeenAnswered = truthOrLie.answer !== 'unanswered';

  const handleChoice = (guess: boolean) => {
    const { id } = truthOrLie;
    guess === truthOrLie.truthyness ? onRight(id) : onWrong(id);
  };

  const TruthButton = () => (
    <button onClick={() => handleChoice(true)} css={buttonCss}>
      <TruthIcon />
    </button>
  );

  const LieButton = () => (
    <button onClick={() => handleChoice(false)} css={buttonCss}>
      <LiarIcon />
    </button>
  );

  return hasBeenAnswered ? (
    <div css={chooserContainerCss}>
      {truthOrLie.truthyness === true && <TruthIcon />}
      {truthOrLie.truthyness === false && <LiarIcon />}
    </div>
  ) : (
    <div css={chooserContainerCss}>
      <TruthButton />
      <span css={orCss}>/</span>
      <LieButton />
    </div>
  );
}

const HOVER_SCALE = 1.4;
const CLICK_SCALE = 0.9;
const TRANS_DIST = 4;

function TruthIcon() {
  return (
    <motion.div
      whileHover={{
        scale: HOVER_SCALE,
        y: [0, TRANS_DIST, -TRANS_DIST, TRANS_DIST, -TRANS_DIST, 0],
      }}
      whileTap={{
        scale: CLICK_SCALE,
      }}
    >
      😇
    </motion.div>
  );
}

function LiarIcon() {
  return (
    <motion.div
      whileHover={{
        scale: HOVER_SCALE,
        x: [0, -TRANS_DIST, TRANS_DIST, -TRANS_DIST, TRANS_DIST, 0],
      }}
      whileTap={{
        scale: CLICK_SCALE,
      }}
    >
      😈
    </motion.div>
  );
}
