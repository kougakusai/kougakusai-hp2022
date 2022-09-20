import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export const Small = ({
  className,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'p'>) => (
  <p
    className={clsx(
      'font-[Roboto] text-[0.75rem] font-normal leading-[0.875rem] text-[#18283f]',
      className
    )}
    {...restProps}
  >
    {children}
  </p>
);
