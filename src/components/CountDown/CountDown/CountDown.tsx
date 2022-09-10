import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { FlipCalendar } from '../FlipCalendar';
import { useCountDown } from 'hooks/useCountDown';

export const CountDown = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<'div'>) => {
  const [leftNum, rightNum] = useCountDown();
  return (
    <div
      className={clsx(
        'grid w-fit auto-rows-min grid-cols-2 grid-rows-[min-content_minmax(0,_1fr)]',
        className
      )}
      {...rest}
    >
      <span className=" col-span-2 mb-[16px] self-end text-center font-[Roboto] text-[24px] font-bold leading-[28px] text-[#18283f]">
        開催まで
      </span>

      <div className="flex items-end">
        <span className="mb-[30px] mr-[16px] font-[Roboto] text-[24px] font-bold leading-[28px] text-[#18283f] [-webkit-text-stroke:0.3px_white]">
          あと
        </span>
        <FlipCalendar>{leftNum}</FlipCalendar>
      </div>
      <div className="flex items-end">
        <FlipCalendar>{rightNum}</FlipCalendar>
        <span className="ml-[16px] mb-[30px] font-[Roboto] text-[24px] font-bold leading-[28px] text-[#18283f] [-webkit-text-stroke:0.3px_white]">
          日
        </span>
      </div>
    </div>
  );
};
