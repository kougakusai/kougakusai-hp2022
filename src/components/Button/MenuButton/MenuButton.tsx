import menuIcon from '@public/rhino_soldering.png';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

interface Props {
  onClick: () => void;
  className: string;
}

export const MenuButton = ({
  onClick,
  className,
  ...restProps
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      onClick={onClick}
      className={'w-12 h-12 sm:w-28 sm:h-28 relative ' + className}
      {...restProps}
    >
      <span className="z-1 absolute top-0.5 left-1.5 text-center text-xs font-bold leading-3 text-gray-800 sm:top-1 sm:left-4 sm:w-20 sm:text-2xl sm:leading-7">
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
