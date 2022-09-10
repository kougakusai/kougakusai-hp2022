import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ComponentPropsWithoutRef, useEffect, useReducer } from 'react';

const smSize = 68;
const lgSize = 153;
const breakPoint = 1000;

export const HomeButton = ({
  onClick,
  className,
  title,
  ...restProps
}: ComponentPropsWithoutRef<'button'>) => {
  const router = useRouter();

  const useMobileView = () => {
    const [matches, setMatches] = useReducer(
      () =>
        window
          ? window.matchMedia(`(max-width:${breakPoint}px)`).matches
          : true,
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

  const isMobile = useMobileView();

  return (
    <button
      onClick={(e) => {
        router.push('/');
        onClick && onClick(e);
      }}
      className={clsx(`h-[68px] w-[68px] lg:h-[153px] lg:w-[153px]`, className)}
      title={title || 'ホーム'}
      {...restProps}
    >
      <Image
        src="/kougakusai_logo.svg"
        alt="こうがく祭ロゴ"
        width={isMobile ? smSize : lgSize}
        height={isMobile ? smSize : lgSize}
      />
    </button>
  );
};
