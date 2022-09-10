import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ComponentPropsWithoutRef, useEffect, useReducer } from 'react';

const breakPoint = 639;

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
      className={clsx(`h-[68px] w-[68px] sm:h-[153px] sm:w-[153px]`, className)}
      title={title || 'ホーム'}
      {...restProps}
    >
      <Image
        src="/kougakusai_logo.svg"
        alt="こうがく祭ロゴ"
        width={isMobile ? 68 : 153}
        height={isMobile ? 68 : 153}
      />
    </button>
  );
};
