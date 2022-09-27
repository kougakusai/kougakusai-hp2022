import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

export const Paragraph = ({
  className,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'p'>) => (
  <p
    className={clsx(
      'font-[Roboto] text-[1rem] leading-[1.125rem] text-[#18283F]',
      className
    )}
    {...restProps}
  >
    {children}
  </p>
);
