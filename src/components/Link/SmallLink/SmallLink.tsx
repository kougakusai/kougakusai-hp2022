import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export const SmallLink = ({
  children,
  className,
  href,
  ...restProps
}: ComponentPropsWithoutRef<'a'> & { href: string }) => (
  <Link href={href}>
    <a
      className={clsx(
        'font-[Roboto] text-[0.625rem] font-light leading-3 text-[#18283f] underline underline-offset-2',
        className
      )}
      {...restProps}
    >
      {children}
    </a>
  </Link>
);
