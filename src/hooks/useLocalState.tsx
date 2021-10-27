import { useState } from 'react';

type UpdaterFunction<T> = (prevState: T) => T;

// Works just like useState, but keeps a copy of the state in local storage and tries to use
// the value in local storage if it exists when initialized
export function useLocalState<T>(key: string, initialValueIfNotFoundLocally: T) {
  const [value, setValue] = useState(() => {
    const localStorateValue = localStorage.getItem(key);
    return localStorateValue !== null
      ? (JSON.parse(localStorateValue) as T)
      : initialValueIfNotFoundLocally;
  });

  const setLocalValue = (newValueOrUpdaterFunction: T | UpdaterFunction<T>) => {
    if (newValueOrUpdaterFunction instanceof Function) {
      newValueOrUpdaterFunction(value);
    }
    localStorage.setItem(key, JSON.stringify(newValueOrUpdaterFunction));
    setValue(newValueOrUpdaterFunction);
  };

  return [value, setLocalValue];
}
