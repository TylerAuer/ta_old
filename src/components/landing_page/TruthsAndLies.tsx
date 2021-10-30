import { css } from '@emotion/react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { color, font, spacing } from '@/constants';
import { HeadingRow } from '@/elements';
import {
  useTolCorrectCount,
  useTolHandleAnswer,
  useTolIncorrectCount,
  useTolsToShow,
} from '@/hooks';
import {
  TruthOrLieHandleAnswerType,
  TruthOrLieObjectType,
  TruthOrLieTruthynessType,
} from '@/types';

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

const slashCss = css`
  margin: 0 ${spacing.xl};
  font-size: ${font.size.sm};
  color: ${color.fontBaseLight};
`;

export const TruthsAndLies = () => {
  const tolToShow = useTolsToShow();

  return (
    <div>
      <HeadingRow level={2} title="Get to know the real me" rightNode={<Score />} />
      <div>
        {tolToShow.map((tol) => (
          <TruthOrLieRow key={tol.id} truthOrLie={tol} />
        ))}
      </div>
    </div>
  );
};

type TruthOrLieRowProps = {
  truthOrLie: TruthOrLieObjectType;
};

function TruthOrLieRow({ truthOrLie }: TruthOrLieRowProps) {
  return (
    <div css={tolRowCss} key={truthOrLie.statement}>
      <TruthOrLieChooser truthOrLie={truthOrLie} />
      <span css={statementCss}>{truthOrLie.statement}</span>
    </div>
  );
}

type TruthOrLieChooserProps = {
  truthOrLie: TruthOrLieObjectType;
};

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

function TruthOrLieChooser({ truthOrLie }: TruthOrLieChooserProps) {
  const handleAnswer = useTolHandleAnswer();

  const isAnswered = truthOrLie.userCorrectness !== 'unanswered';

  // Only show option if the question is unanswered or if...
  // the question is answered and the option was the correct answer
  const showTruthOption = !isAnswered || truthOrLie.truthyness === 'truth';
  const showFalseOption = !isAnswered || truthOrLie.truthyness === 'lie';

  const handleClick = (userAnswer: TruthOrLieTruthynessType) => {
    handleAnswer(truthOrLie.id, userAnswer);
  };

  return (
    <div css={chooserContainerCss}>
      <AnimateSharedLayout>
        <AnimatePresence>
          {showTruthOption && (
            <TruthOption key="truth" handleClick={handleClick} disableAnimations={isAnswered} />
          )}
          {!isAnswered && (
            <motion.span key="/" variants={variants} exit="exit" css={slashCss}>
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
  handleClick: (answer: TruthOrLieTruthynessType) => void;
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
      onClick={() => handleClick('truth')}
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
      onClick={() => handleClick('lie')}
      layout
    >
      😈
    </motion.div>
  );
}

// TODO: Add animations and make use colors to represent good vs bad scores
function Score() {
  const correctCount = useTolCorrectCount();
  const incorrectCount = useTolIncorrectCount();

  if (!correctCount && !incorrectCount) return null;

  return (
    <div css={scoreCss}>
      {correctCount} / {correctCount + incorrectCount}
    </div>
  );
}
