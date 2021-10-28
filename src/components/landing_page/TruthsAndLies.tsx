import { css } from '@emotion/react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { TruthOrLie, truthsAndLiesList } from '../../data/truths_and_lies_list';
import { font, spacing } from '@/constants';
import { HeadingRow } from '@/elements';
import { fisherYatesShuffle } from '@/utils/fisher_yates_shuffle';
import { useLocalState } from '@/hooks/useLocalState';
import { Icon } from '@/elements/Icon';

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
  width: 100px;
  margin-right: ${spacing.xl};
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const chooserOptionCss = css`
  font-size: ${font.size.xl};
  cursor: pointer;
`;

const orCss = css`
  margin: 0 ${spacing.xl};
  font-size: ${font.size.sm};
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

const HOVER_SCALE = 1.4;
const TRANS_DIST = 4;

const variants = {
  noAnimation: {},
  hoverLie: {
    scale: HOVER_SCALE,
    x: [0, -TRANS_DIST, TRANS_DIST, -TRANS_DIST, TRANS_DIST, 0],
  },
  hoverTruth: {
    scale: HOVER_SCALE,
    y: [0, TRANS_DIST, -TRANS_DIST, TRANS_DIST, -TRANS_DIST, 0],
  },
  tap: { scale: 0.9 },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

function TruthOrLieChooser({ handleAnswer, truthOrLie }: TruthOrLieChooserProps) {
  const [answer, setAnswer] = useLocalState<AnsweredStates>(truthOrLie.statement, 'unanswered');
  const isAnswered = answer !== 'unanswered';
  const showTruthOption = !isAnswered || truthOrLie.truthyness === true;
  const showFalseOption = !isAnswered || truthOrLie.truthyness === false;

  const handleClick = (guess: boolean) => {
    const answeredCorrectly = guess === truthOrLie.truthyness;
    handleAnswer(answeredCorrectly);
    const newVal = setAnswer(answeredCorrectly ? 'right' : 'wrong');
  };

  return (
    <div css={chooserContainerCss}>
      <AnimateSharedLayout>
        <AnimatePresence>
          {showTruthOption && (
            <TruthOption key="truth" handleClick={handleClick} disableAnimations={isAnswered} />
          )}
          {!isAnswered && (
            <motion.span key="/" variants={variants} exit="exit" css={orCss}>
              /
            </motion.span>
          )}
          {showFalseOption && (
            <LiarOption key="lie" handleClick={handleClick} disableAnimations={isAnswered} />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}

type AnswerButtonProps = {
  handleClick: (kind: boolean) => void;
  disableAnimations: boolean;
};

function TruthOption({ handleClick, disableAnimations }: AnswerButtonProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={disableAnimations ? 'noAnimation' : 'hoverTruth'}
      whileTap={disableAnimations ? 'noAnimation' : 'tap'}
      exit={'exit'}
      css={chooserOptionCss}
      onClick={() => handleClick(true)}
      layout
    >
      😇
    </motion.div>
  );
}

function LiarOption({ disableAnimations, handleClick }: AnswerButtonProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={disableAnimations ? 'noAnimation' : 'hoverLie'}
      whileTap={disableAnimations ? 'noAnimation' : 'tap'}
      exit={'exit'}
      css={chooserOptionCss}
      onClick={() => handleClick(false)}
      layout
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
