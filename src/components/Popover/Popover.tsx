import clsx from 'clsx';
import { ComponentPropsWithoutRef, ReactNode, useState } from 'react';

export const Popover = ({
  popup,
  disable,
  className,
  children,
  ...restProps
}: { popup: ReactNode; disable?: boolean } & Omit<
  ComponentPropsWithoutRef<'div'>,
  'onClick'
>) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (!disable) {
      setIsActive(true);
      setTimeout(() => setIsActive(false), 3000);
    }
  };

  return (
    <div className="relative w-max" onClick={handleClick} {...restProps}>
      <div
        className={clsx(
          'absolute top-[-0.125rem] left-1/2 w-max translate-x-[-50%] select-none text-[0.75rem]',
          !disable && isActive ? 'animate-popup' : 'hidden',
          className
        )}
        aria-hidden
      >
        {popup}
      </div>
      {children}
    </div>
  );
};
