import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ComponentPropsWithoutRef, useEffect, useReducer } from 'react';
import { useCloseMenu } from 'hooks/useCloseMenu';
import { useMobileView } from 'hooks/useMobileView';

export const HomeButton = ({
  onClick,
  className,
  title,
  ...restProps
}: ComponentPropsWithoutRef<'button'>) => {
  const router = useRouter();
  const closeMenu = useCloseMenu();
  const isMobile = useMobileView();

  return (
    <button
      onClick={(e) => {
        router.push('/');
        closeMenu();
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
