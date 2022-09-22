import clsx from 'clsx';
import { HomeButton, MenuButton } from 'components/Button';

export const Header = ({ className }: { className?: string }) => (
  <div
    className={clsx(
      'fixed flex w-full items-center justify-between',
      className
    )}
  >
    <HomeButton className="ml-[16px] sm:ml-[56px]" />
    <MenuButton className="mr-[16px] sm:mr-[56px]" />
  </div>
);
