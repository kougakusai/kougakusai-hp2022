import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

const RightCircleArrow = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg width="100%" height="100%" viewBox="0 0 16 16" {...props}>
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
  arrow = 'right',
  href,
  children,
  className,
  ...restProps
}: Omit<ComponentPropsWithoutRef<'a'>, 'href'> &
  Pick<LinkProps, 'href'> & {
    arrow?: 'right' | 'left';
  }) => {
  return (
    <Link href={href}>
      <a
        className={clsx(
          'inline-flex min-h-[2rem] min-w-[9rem] select-none items-center justify-center gap-x-2 rounded-full px-4',
          className
        )}
        {...restProps}
      >
        {arrow === 'left' && (
          <RightCircleArrow className="h-4 w-4 -scale-x-100" />
        )}
        <span className="flex-auto overflow-x-hidden text-ellipsis whitespace-nowrap text-center align-middle font-[Roboto] text-xs font-bold">
          {children}
        </span>
        {arrow === 'right' && <RightCircleArrow className="h-4 w-4" />}
      </a>
    </Link>
  );
};
