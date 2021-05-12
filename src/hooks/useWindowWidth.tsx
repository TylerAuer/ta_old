import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  // Triggers dimension update when window changes
  useEffect(() => {
    const getWindowWidth = () => setWidth(window.innerWidth);

    // Needs to be called to get the dimensions when the reference first mounts
    getWindowWidth();

    // Adds event listener to get new dimensions when window changes
    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  return width;
};
