import clsx from 'clsx';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { Url } from 'url';

const DownCircleArrow = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg viewBox="0 0 16 16" {...props}>
    <circle
      cx="8"
      cy="8"
      r="7"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    />
    <polyline
      points="4.5,4.5 8,11.5 11.5,4.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    />
  </svg>
);

export const RoundedButton = ({
  href = '',
  children,
  className,
  disabled,
  ...restProps
}: { disabled?: boolean } & ComponentPropsWithoutRef<'a'>) => (
  <Link href={href as unknown as Url}>
    <a
      className={clsx(
        'group inline-flex h-[3.5rem] w-[14.5rem] select-none rounded-full bg-[#18283F] p-[0.125rem] sm:h-[5.75rem] sm:w-[29.25rem] sm:p-1',
        disabled && 'pointer-events-none cursor-not-allowed grayscale',
        className
      )}
      {...restProps}
    >
      <div
        className={clsx(
          'flex h-full w-full flex-auto items-center justify-center gap-x-4 rounded-full bg-[#F3F06B] px-11',
          'translate-y-[-0.0625rem] select-none group-active:translate-y-[0.0625rem] group-disabled:group-active:translate-y-[-0.0625rem] sm:translate-y-[-0.125rem] sm:group-active:translate-y-[0.125rem] sm:disabled:group-active:translate-y-[-0.125rem]'
        )}
      >
        <span className="flex-auto text-ellipsis whitespace-nowrap text-center font-[Roboto] text-base font-bold text-[#18283F] sm:text-[2rem]">
          {children}
        </span>
        <DownCircleArrow className="h-4 w-4 sm:h-8 sm:w-8" />
      </div>
    </a>
  </Link>
);
