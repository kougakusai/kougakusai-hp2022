import { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Copyright } from 'components/Copyright';
import { MenuLink } from 'components/Link';
import { Paragraph } from 'components/Typography';
import { useMobileView } from 'hooks/useMobileView';
import { useMenuOpen } from 'hooks/useMenuOpen';
import { MapPinIcon } from 'components/Icon';

export const MenuDrawer = ({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'nav'>) => {
  const isMobile = useMobileView();
  const menuOpen = useMenuOpen();

  return (
    <nav
      className={clsx(
        'fixed inset-0 bg-[#edbd83] px-[24px] pt-[80px] sm:flex sm:flex-col sm:items-center',
        !menuOpen && 'invisible',
        className
      )}
      {...restProps}
    >
      <div className="sm:flex sm:items-center">
        {!isMobile && (
          <div>
            <Image
              src="/kougakusai_title.png"
              alt="こうがく祭タイトル"
              width={320}
              height={180}
            />
          </div>
        )}
        <div className="sm:ml-[32px]">
          <Paragraph className="font-bold">
            <span className="text-[1.5rem] leading-6 sm:text-[2.5rem] sm:leading-[3rem]">
              2022.11.05
            </span>
            <Space />
            <span className="sm:text-[1.5rem] sm:leading-6">土曜日</span>
          </Paragraph>
          <Paragraph className="mt-[16px] font-bold sm:text-[1.5rem] sm:leading-6">
            <MapPinIcon className="mr-[4px] inline-block sm:mr-[8px]" />
            茨城大学工学部キャンパス
            <Space />/<Space />
            入場料無料
          </Paragraph>
        </div>
      </div>
      <ul className="mt-[32px] grid grid-cols-1 gap-y-[32px] sm:mt-[128px] sm:grid-cols-2 sm:gap-y-[48px] sm:gap-x-[96px]">
        {/* TODO: 遷移先実装時にリンク有効化 */}
        {/* {links.map((link) => (
          <li key={link.href}>
            <MenuLink href={link.href}>{link.name}</MenuLink>
          </li>
        ))} */}
        <li>
          <MenuLink href={links[0].href}>{links[0].name}</MenuLink>
        </li>
        {links.map(
          (link, i) =>
            i !== 0 &&
            i !== 2 &&
            i !== 4 &&
            i !== 5 && (
              <li key={link.href}>
                <del>
                  <p className="font-[Roboto] text-[1.5rem] font-bold leading-7 text-[#18283f] sm:text-[2.5rem] sm:leading-[3rem]">
                    {link.name}
                  </p>
                </del>
              </li>
            )
        )}
        <li>
          <MenuLink href={links[2].href}>{links[2].name}</MenuLink>
        </li>
        <li>
          <MenuLink href={links[4].href}>{links[4].name}</MenuLink>
        </li>
        <li>
          <MenuLink href={links[5].href}>{links[5].name}</MenuLink>
        </li>
      </ul>
      <div className="mt-auto">
        <div className="mt-[40px] sm:mt-[120px]">
          <Image
            src="/kougakusai_banner.png"
            alt="こうがく祭バナー"
            width={isMobile ? 370 : 590}
            height={isMobile ? 150 : 240}
          />
        </div>
        <Copyright className="block py-[24px] text-center sm:pb-[40px]" />
      </div>
    </nav>
  );
};

const links = [
  { name: 'トップ', href: '/' },
  { name: 'こうがく祭について', href: '/about' },
  { name: '企画一覧', href: '/program' },
  { name: 'タイムスケジュール', href: '/schedule' },
  { name: 'アクセス', href: '/access' },
  { name: 'お問い合わせ', href: '/contact' },
];

const Space = () => {
  const isMobile = useMobileView();
  return isMobile ? <>&nbsp;</> : <>&emsp;</>;
};
