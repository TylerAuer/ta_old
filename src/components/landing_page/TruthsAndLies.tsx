import { useState, Fragment } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { TruthOrLie, truthsAndLiesList } from '../../data/truths_and_lies_list';
import { font, spacing } from '@/constants';
import { HeadingRow } from '@/elements';
import { fisherYatesShuffle } from '@/utils/fisher_yates_shuffle';
import { useLocalState } from '@/hooks/useLocalState';

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
  text-align: center;
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

const shuffled = fisherYatesShuffle<TruthOrLie>(truthsAndLiesList, true);

export const TruthsAndLies = () => {
  const [showCount, setShowCount] = useLocalState<number>(
    'tol_show_count',
    Math.min(shuffled.length, 3),
  );
  const [rightCount, setRightCount] = useLocalState<number>('tol_right_count', 0);
  const [wrongCount, setWrongCount] = useLocalState<number>('tol_wrong_count', 0);

  const getNextToL = () => setShowCount((prev) => Math.min(prev + 1, shuffled.length));

  const handleAnswer = (isRight: boolean) => {
    isRight ? setRightCount((prev) => prev + 1) : setWrongCount((prev) => prev + 1);
    getNextToL();
  };

  return (
    <div>
      <HeadingRow
        level={2}
        title="Get to know the real me"
        rightNode={<Score rightCount={rightCount} wrongCount={wrongCount} />}
      />
      <div>
        {shuffled.slice(0, showCount).map((tol) => (
          <TruthOrLieRow key={tol.statement} truthOrLie={tol} handleAnswer={handleAnswer} />
        ))}
      </div>
    </div>
  );
};

type TruthOrLieRowProps = {
  handleAnswer: (isRight: boolean) => void;
  truthOrLie: TruthOrLie;
};

function TruthOrLieRow({ truthOrLie, handleAnswer }: TruthOrLieRowProps) {
  return (
    <div css={tolRowCss} key={truthOrLie.statement}>
      <TruthOrLieChooser truthOrLie={truthOrLie} handleAnswer={handleAnswer} />
      <span css={statementCss}>{truthOrLie.statement}</span>
    </div>
  );
}

type TruthOrLieChooserProps = {
  handleAnswer: (isRight: boolean) => void;
  truthOrLie: TruthOrLie;
};

type AnsweredStates = 'right' | 'wrong' | 'unanswered';

function TruthOrLieChooser({ handleAnswer, truthOrLie }: TruthOrLieChooserProps) {
  const [answer, setAnswer] = useLocalState<AnsweredStates>(truthOrLie.statement, 'unanswered');

  const handleChoice = (guess: boolean) => {
    const answeredCorrectly = guess === truthOrLie.truthyness;
    handleAnswer(answeredCorrectly);
    const newVal = setAnswer(answeredCorrectly ? 'right' : 'wrong');
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

  const Unanswered = () => (
    <Fragment>
      <TruthButton />
      <span css={orCss}>/</span>
      <LieButton />
    </Fragment>
  );

  const Answered = () => (
    <Fragment>
      {truthOrLie.truthyness === true && <TruthIcon />}
      {truthOrLie.truthyness === false && <LiarIcon />}
    </Fragment>
  );

  return (
    <div css={chooserContainerCss}>{answer === 'unanswered' ? <Unanswered /> : <Answered />}</div>
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

type ScoreProps = {
  rightCount: number;
  wrongCount: number;
};

function Score({ rightCount, wrongCount }: ScoreProps) {
  if (!rightCount && !wrongCount) return null;

  return (
    <div css={scoreCss}>
      {rightCount} / {rightCount + wrongCount}
    </div>
  );
}
