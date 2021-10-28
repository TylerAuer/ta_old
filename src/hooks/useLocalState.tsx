import { useState } from 'react';

type SetLocalValueInput<T> = T | ((prev: T) => T);
type SetLocalStateFunctionType<T> = (input: SetLocalValueInput<T>) => void;

// Works just like useState, but keeps a copy of the state in local storage and tries to use
// the value in local storage if it exists when initialized
export function useLocalState<T>(
  key: string,
  initialValueIfNotFoundLocally: T,
): [T, SetLocalStateFunctionType<T>] {
  const [value, setValue] = useState(() => {
    const localStorateValue = localStorage.getItem(key);
    return localStorateValue !== null
      ? (JSON.parse(localStorateValue) as T)
      : initialValueIfNotFoundLocally;
  });

  const setLocalValue: SetLocalStateFunctionType<T> = (input: SetLocalValueInput<T>) => {
    if (input instanceof Function) {
      const computedNewValue = input(value);
      localStorage.setItem(key, JSON.stringify(computedNewValue));
      setValue(computedNewValue);
    } else {
      localStorage.setItem(key, JSON.stringify(input));
      setValue(input);
    }
  };

  return [value, setLocalValue];
}
