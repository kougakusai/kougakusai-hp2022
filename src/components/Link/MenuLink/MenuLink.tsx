import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export const MenuLink = ({
  children,
  className,
  href,
  ...restProps
}: ComponentPropsWithoutRef<'a'> & { href: string }) => (
  <Link href={href}>
    <a
      className={clsx(
        'font-[Roboto] text-[1.5rem] font-bold leading-7 text-[#18283f] sm:text-[2.5rem] sm:leading-[3rem]',
        className
      )}
      {...restProps}
    >
      {children}
    </a>
  </Link>
);
