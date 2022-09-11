import menuIcon from '@public/rhino_soldering.png';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

export const MenuButton = ({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className={'w-12 h-12 sm:w-28 sm:h-28 relative drop-shadow-sm ' + className}
      {...restProps}
    >
      <span className="absolute top-0.5 left-1.5 z-10 text-center text-xs font-bold leading-3 text-gray-800 sm:top-1 sm:left-4 sm:w-20 sm:text-2xl sm:leading-7">
        MENU
      </span>
      <div className="box-border h-12 w-12 rounded-sm border border-gray-400 p-1 sm:h-28 sm:w-28 sm:p-2">
        <Image
          src={menuIcon}
          alt="menuIcon"
          className="box-border h-full w-full"
        />
      </div>
    </button>
  );
};
