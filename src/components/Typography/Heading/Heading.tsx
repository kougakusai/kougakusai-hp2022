import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export const Heading = ({
  className,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'h1'>) => (
  <h1
    className={clsx(
      'font-[Roboto] text-[24px] font-bold leading-[28px] text-[#18283f]',
      className
    )}
    {...restProps}
  >
    {children}
  </h1>
);
