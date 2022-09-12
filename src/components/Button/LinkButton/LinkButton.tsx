import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ComponentPropsWithoutRef } from 'react';
import { Url } from 'url';

const RightCircleArrow = (props: ComponentPropsWithoutRef<'svg'>) => (
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
      points="4.5,4.5 11.5,8 4.5,11.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    />
  </svg>
);

export const LinkButton = ({
  href,
  onClick,
  children,
  className,
  ...restProps
}: ComponentPropsWithoutRef<'button'> & { href: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={(e) => {
        router.push(href);
        onClick && onClick(e);
      }}
      className={clsx(
        'inline-flex h-8 w-36 select-none items-center justify-center gap-x-2 rounded-full px-4',
        className
      )}
      {...restProps}
    >
      <span className="flex-auto text-ellipsis whitespace-nowrap text-center align-middle text-xs">
        {children}
      </span>
      <RightCircleArrow className="h-4 w-4" />
    </button>
  );
};
