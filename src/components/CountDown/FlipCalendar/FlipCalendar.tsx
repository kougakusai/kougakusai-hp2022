import { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { useMobileView } from 'hooks/useMobileView';

export const FlipCalendar = ({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<'div'>) => {
  const isMobile = useMobileView();

  return (
    <div
      className={clsx(
        'relative h-[110px] w-[70px] select-none sm:h-[220px] sm:w-[140px]',
        className
      )}
      {...rest}
    >
      <Image
        src="/flip_clock.png"
        alt="カウントダウン"
        width={isMobile ? 70 : 140}
        height={isMobile ? 110 : 220}
      />
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[Roboto] text-[48px] font-bold leading-[56px] text-[#18283f] sm:text-[88px] sm:leading-[104px]">
        {children}
      </p>
    </div>
  );
};
