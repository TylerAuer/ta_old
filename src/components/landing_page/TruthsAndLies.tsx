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
import { TruthOrLieObjectType, TruthOrLieTruthynessType } from '@/types';
import { getLetterGrade } from '@/utils/get_letter_grade';

const scoreContainerCss = css`
  position: relative;
`;

const scorePlaceholderCss = css`
  visibility: hidden;
  z-index: -1000;
`;

const scoreCss = css`
  font-size: ${font.size.md};
  position: absolute;
  top: 0;
  right: 0;
`;

const tolRowCss = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.6;
`;

const statementCss = css`
  font-size: ${font.size.md};
  flex-grow: 1;
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

const correctnessCss = css`
  font-size: ${font.size.xl};
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
      <TruthOrLieCorrectness truthOrLie={truthOrLie} />
    </div>
  );
}

type TruthOrLieChooserProps = {
  truthOrLie: TruthOrLieObjectType;
};

const HOVER_SCALE = 1.4;
const TRANS_DIST = 4;

const tolChooserVariants = {
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
            <motion.span key="/" variants={tolChooserVariants} exit="exit" css={slashCss}>
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
      variants={tolChooserVariants}
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
      variants={tolChooserVariants}
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

const scoreVariants = {
  initial: {
    y: -25,
    opacity: 0,
    scale: 0.2,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
    },
  },
  exit: {
    scale: 0.2,
    opacity: 0,
    y: 20,
    transition: {
      delay: 0.5,
    },
  },
};

function Score() {
  const correctCount = useTolCorrectCount();
  const incorrectCount = useTolIncorrectCount();

  if (!correctCount && !incorrectCount) return null;

  const uniqueID = correctCount + incorrectCount;

  const letterGrade = getLetterGrade(correctCount, incorrectCount);

  return (
    <div css={scoreContainerCss}>
      {/* This div holds space so that the flexbox knows the size of the element and then the
      the absolutely positioned motion.div has a correct parent reference for positioning */}
      <div aria-hidden="true" css={scorePlaceholderCss}>
        {letterGrade}
      </div>
      <AnimatePresence>
        <motion.div
          key={uniqueID} // Causes unmount/remount when score changes
          css={scoreCss}
          style={{ zIndex: uniqueID }}
          variants={scoreVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {letterGrade}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const correctnessVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
    },
  },
};

type TruthOrLieCorrectnessProps = {
  truthOrLie: TruthOrLieObjectType;
};

function TruthOrLieCorrectness({ truthOrLie }: TruthOrLieCorrectnessProps) {
  if (truthOrLie.userCorrectness === 'unanswered') return null;

  const userIsCorrect = truthOrLie.userCorrectness === 'correct';

  return (
    <AnimatePresence>
      <motion.div
        variants={correctnessVariants}
        initial="initial"
        animate="animate"
        css={correctnessCss}
      >
        {userIsCorrect ? '✅' : '❌'}
      </motion.div>
    </AnimatePresence>
  );
}
