import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { Heading, Small } from 'components/Typography';
import Image from 'next/image';
import { Copyright } from 'components/Copyright';
import { useMobileView } from 'hooks/useMobileView';
import { LinkButton } from 'components/Button';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from 'components/Icon';
import { CopyButton } from 'components/Button/CopyButton';

export const Footer = ({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) => {
  const isMobile = useMobileView();
  return (
    <div
      className={clsx('rounded-t-[48px] bg-white text-center', className)}
      {...restProps}
    >
      <Heading className="pt-[32px]">SHARE</Heading>
      <div className="mt-[24px] flex justify-center gap-[24px]">
        <TwitterIcon />
        <InstagramIcon />
        <YoutubeIcon />
        <CopyButton />
      </div>
      <div className="mt-[48px]">
        <Image
          src="/kougakusai_banner.png"
          alt="こうがく祭バナー"
          height={240}
          width={590}
          layout={isMobile ? 'responsive' : undefined}
        />
      </div>
      <div className="mt-[18px] flex justify-center gap-[8px]">
        {/* TODO: 遷移先ページ実装時にリンク有効化 */}
        {/* <SmallLink href="/privacy-policy">プライバシーポリシー</SmallLink> */}
        <Small>プライバシーポリシー</Small>
        <Small>|</Small>
        {/* <SmallLink href="/site-policy">サイトポリシー</SmallLink> */}
        <Small>サイトポリシー</Small>
        <Small>|</Small>
        {/* <SmallLink href="/covid-19-guildeline">
          感染症対策ガイドライン
        </SmallLink> */}
        <Small>感染症対策ガイドライン</Small>
      </div>
      <LinkButton
        className="mt-[40px] bg-[#18283F] font-bold text-white"
        href="/contact"
      >
        お問い合わせ
      </LinkButton>
      <Copyright className="mt-[40px] block pb-[16px]" />
    </div>
  );
};
