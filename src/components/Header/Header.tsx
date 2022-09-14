import clsx from 'clsx';
import { HomeButton, MenuButton } from 'components/Button';

export const Header = ({ className }: { className?: string }) => (
  <div className={clsx('fixed z-10 flex w-full items-center', className)}>
    <HomeButton className="ml-[16px] sm:ml-[56px]" />
    {/* TODO: メニュー実装時に表示 */}
    {/* <MenuButton className="mr-[16px] sm:mr-[56px]" /> */}
  </div>
);
