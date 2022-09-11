import { useEffect, useReducer } from 'react';

/**
 * useMobileView はページを閲覧しているデバイスがモバイル端末であるかどうかを判定します
 * モバイル端末のとき true、そうでないとき false を返します
 */
export const useMobileView = () => {
  const breakPoint = 639;

  const [matches, setMatches] = useReducer(
    () =>
      window ? window.matchMedia(`(max-width:${breakPoint}px)`).matches : true,
    true
  );

  useEffect(() => {
    const matchMedia = window.matchMedia(`(max-width:${breakPoint}px)`);
    matchMedia.addEventListener('change', setMatches);
    setMatches();

    return () => matchMedia.removeEventListener('change', setMatches);
  }, []);

  return matches;
};
