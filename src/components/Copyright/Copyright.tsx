import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export const Copyright = ({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'small'>) => (
  <small
    className={clsx(
      'font-[Roboto] text-[0.625rem] font-light leading-3 text-[#18283F] sm:text-[1rem] sm:leading-5',
      className
    )}
    {...restProps}
  >
    &copy;2022年度こうがく祭実行委員会
  </small>
);
