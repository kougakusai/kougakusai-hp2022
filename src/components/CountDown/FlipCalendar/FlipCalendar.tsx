import { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export const FlipCalendar = ({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<'div'>) => (
  <div className={clsx('relative h-[110px] w-[70px]', className)} {...rest}>
    <Image src="/flip_clock.png" alt="カウントダウン" width={70} height={110} />
    <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[Roboto] text-[48px] font-bold leading-[56px]">
      {children}
    </p>
  </div>
);
