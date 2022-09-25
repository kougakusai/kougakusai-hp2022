import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export const Heading = ({
  className,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'h1'>) => (
  <h1
    className={clsx(
      'font-[Roboto] text-[1.5rem] font-bold leading-[1.75rem] text-[#18283f]',
      className
    )}
    {...restProps}
  >
    {children}
  </h1>
);
