import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useCloseMenu } from 'hooks/useCloseMenu';

export const MenuLink = ({
  children,
  className,
  href,
  onClick,
  ...restProps
}: ComponentPropsWithoutRef<'a'> & { href: string }) => {
  const closeMenu = useCloseMenu();

  return (
    <Link href={href}>
      <a
        className={clsx(
          'font-[Roboto] text-[1.5rem] font-bold leading-7 text-[#18283f] sm:text-[2.5rem] sm:leading-[3rem]',
          className
        )}
        onClick={(e) => {
          closeMenu();
          onClick && onClick(e);
        }}
        {...restProps}
      >
        {children}
      </a>
    </Link>
  );
};
