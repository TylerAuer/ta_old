import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { fisherYatesShuffle } from '@/utils/fisher_yates_shuffle';
import { tolRawDataWithoutDeprecatedTols } from '@/data/truths_and_lies_data';
import {
  TruthOrLieTruthynessType,
  TruthOrLieHandleAnswerType,
  TruthOrLieObjectType,
} from '@/types';
import useSound from 'use-sound';
import sadSound from '../../sound/sad_double_boop.mp3';
import happySound from '../../sound/two_happy_boops.mp3';
import { feature } from '@/constants/feature';

const VisibleTolsContext = createContext<TruthOrLieObjectType[]>([]);
const CorrectCountContext = createContext<number>(0);
const IncorrectCountContext = createContext<number>(0);
const HandleAnswerContext = createContext<TruthOrLieHandleAnswerType>(() => 'correct');
const GetNextContext = createContext<() => void>(() => {});
const HideContext = createContext<(id: number) => void>((id: number) => {});

type TruthOrLieProviderProps = {
  children: ReactNode;
};

const randomTolIds = getRandomizedListOfTolIds();

export const TruthOrLieProvider = ({ children }: TruthOrLieProviderProps) => {
  const [tols, setTols] = useState(getTolMap());
  const [idsOfVisibleTols, setIdsOfVisibleTols] = useState(getInitialVisibleTols(randomTolIds));
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [nextIdxToGetFromRandomList, setNextIdxToGetFromRandomList] = useState(
    feature.INITIAL_TRUTH_OR_LIE_COUNT_TO_DISPLAY,
  );
  const [playCorrect] = useSound(happySound);
  const [playIncorrect] = useSound(sadSound);

  const tolsToShow = idsOfVisibleTols.map((id) => tols[id]);

  const handleAnswer: TruthOrLieHandleAnswerType = (
    id: number,
    answerGiven: TruthOrLieTruthynessType,
  ) => {
    const userIsCorrect = tols[id].truthyness === answerGiven;

    // Play sound
    userIsCorrect ? playCorrect() : playIncorrect();

    // Update the correctness of the answered tol
    setTols((prevTols) => ({
      ...prevTols,
      [id]: {
        ...prevTols[id],
        userCorrectness: userIsCorrect ? 'correct' : 'incorrect',
      },
    }));

    // Update the appropriate counter
    userIsCorrect ? setCorrectCount((prev) => prev + 1) : setIncorrectCount((prev) => prev + 1);

    // Show another ToL
    if (nextIdxToGetFromRandomList < randomTolIds.length) {
      getNext();
    }
  };

  const getNext = () => {
    const hasSeenLastTol = nextIdxToGetFromRandomList === randomTolIds.length;
    if (!hasSeenLastTol) {
      setIdsOfVisibleTols((prev) => [...prev, randomTolIds[nextIdxToGetFromRandomList]]);
      setNextIdxToGetFromRandomList((prev) => prev + 1);
    }
  };

  const hide = (id: number) => {
    setIdsOfVisibleTols((prev) => prev.filter((tolId) => tolId !== id));
  };

  return (
    <VisibleTolsContext.Provider value={tolsToShow}>
      <IncorrectCountContext.Provider value={incorrectCount}>
        <CorrectCountContext.Provider value={correctCount}>
          <HandleAnswerContext.Provider value={handleAnswer}>
            <GetNextContext.Provider value={getNext}>
              <HideContext.Provider value={hide}>{children}</HideContext.Provider>
            </GetNextContext.Provider>
          </HandleAnswerContext.Provider>
        </CorrectCountContext.Provider>
      </IncorrectCountContext.Provider>
    </VisibleTolsContext.Provider>
  );
};

export const useTolsToShow = () => {
  const tolsToShow = useContext(VisibleTolsContext);
  if (tolsToShow === undefined) {
    throw new Error('useTolsToShow must be used within a TruthOrLieProvider');
  }
  return tolsToShow;
};

export const useTolIncorrectCount = () => {
  const incorrectCount = useContext(IncorrectCountContext);
  if (incorrectCount === undefined) {
    throw new Error('useTolIncorrectCount must be used within a TruthOrLieProvider');
  }
  return incorrectCount;
};

export const useTolCorrectCount = () => {
  const correctCount = useContext(CorrectCountContext);
  if (correctCount === undefined) {
    throw new Error('useTolCorrectCount must be used within a TruthOrLieProvider');
  }
  return correctCount;
};

export const useTolHandleAnswer = () => {
  const handleAnswer = useContext(HandleAnswerContext);
  if (handleAnswer === undefined) {
    throw new Error('useTolHandleAnswer must be used within a TruthOrLieProvider');
  }
  return handleAnswer;
};

export const useTolGetNext = () => {
  const getNext = useContext(GetNextContext);
  if (getNext === undefined) {
    throw new Error('useTolGetNext must be used within a TruthOrLieProvider');
  }
  return getNext;
};

export const useTolHide = () => {
  const hide = useContext(HideContext);
  if (hide === undefined) {
    throw new Error('useTolHide must be used within a TruthOrLieProvider');
  }
  return hide;
};

function getRandomizedListOfTolIds() {
  const randomizedTuples = fisherYatesShuffle(tolRawDataWithoutDeprecatedTols, true);
  return randomizedTuples.map((tuple) => tuple[0]);
}

function getTolMap() {
  const tolMap: { [key: number]: TruthOrLieObjectType } = {};

  tolRawDataWithoutDeprecatedTols.forEach(([id, truthyness, statement]) => {
    tolMap[id] = {
      id,
      truthyness,
      statement,
      userCorrectness: 'unanswered',
    };
  });

  return tolMap;
}

function getInitialVisibleTols(randomIdsList: number[]) {
  return randomIdsList.slice(0, feature.INITIAL_TRUTH_OR_LIE_COUNT_TO_DISPLAY);
}
