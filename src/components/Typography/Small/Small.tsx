import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export const Small = ({
  className,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'p'>) => (
  <p
    className={clsx(
      'font-[Roboto] text-[0.75rem] font-bold leading-[0.875px] text-[#18283f]',
      className
    )}
    {...restProps}
  >
    {children}
  </p>
);
