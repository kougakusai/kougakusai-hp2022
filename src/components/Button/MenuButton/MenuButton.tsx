import menuIcon from '@public/rhino_soldering.png';
import clsx from 'clsx';
import { useMobileView } from 'hooks/useMobileView';
import { useToggleMenu } from 'hooks/useToggleMenu';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

export const MenuButton = ({
  className,
  onClick,
  ...restProps
}: ComponentPropsWithoutRef<'button'>) => {
  const toggleMenu = useToggleMenu();
  const isMobile = useMobileView();

  return (
    <button
      className={clsx(
        'relative h-12 w-12 drop-shadow-sm sm:h-28 sm:w-28',
        className
      )}
      onClick={(e) => {
        toggleMenu();
        onClick && onClick(e);
      }}
      {...restProps}
    >
      <span className="absolute top-0.5 left-1.5 z-10 text-center text-xs font-bold leading-3 text-gray-800 sm:top-1 sm:left-4 sm:w-20 sm:text-2xl sm:leading-7">
        MENU
      </span>
      <div className="box-border flex h-12 w-12 items-center justify-center rounded-sm border  border-gray-400 sm:h-28 sm:w-28">
        <Image
          src="/rhino_soldering.png"
          width={isMobile ? 40 : 94}
          height={isMobile ? 40 : 94}
          alt="menuIcon"
        />
      </div>
    </button>
  );
};
