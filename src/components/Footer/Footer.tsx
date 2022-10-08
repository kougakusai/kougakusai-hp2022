import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { Heading, Small } from 'components/Typography';
import Image from 'next/image';
import { Copyright } from 'components/Copyright';
import { useMobileView } from 'hooks/useMobileView';
import { LinkButton } from 'components/Button';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from 'components/Icon';
import { CopyButton } from 'components/Button/CopyButton';
import { FacebookIcon } from 'components/Icon/FacebookIcon';
import { SmallLink } from 'components/Link';

export const Footer = ({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) => {
  const isMobile = useMobileView();
  return (
    <footer
      className={clsx(
        'rounded-t-[48px] bg-white pt-6 pb-4 text-center',
        className
      )}
      {...restProps}
    >
      <section className="flex flex-col gap-y-6">
        <Heading>こうがく祭公式SNS</Heading>
        <div className="flex h-10 justify-center gap-x-6">
          {SNSLinks.map(({ name, href, icon }) => (
            <a
              href={href}
              title={'こうがく祭公式' + name}
              className="h-10 w-10"
              target="_blank"
              rel="noopener noreferrer"
              key={name}
            >
              {icon}
            </a>
          ))}
          <CopyButton />
        </div>
        {/* TODO: embed twitter timeline */}
        <Heading>茨城大学工学部公式SNS</Heading>
        <div className="flex h-10 justify-center gap-x-6">
          {CoESNSLinks.map(({ name, href, icon }) => (
            <a
              href={href}
              title={'茨城大学工学部公式' + name}
              className="h-10 w-10"
              target="_blank"
              rel="noopener noreferrer"
              key={name}
            >
              {icon}
            </a>
          ))}
        </div>
      </section>
      <div className="mt-6">
        <Image
          src="/kougakusai_banner.png"
          alt="こうがく祭バナー"
          height={240}
          width={590}
          layout={isMobile ? 'responsive' : undefined}
        />
      </div>
      <div className="mt-[18px] flex justify-center gap-[8px]">
        <SmallLink href="/privacy-policy">プライバシーポリシー</SmallLink>
      </div>
      <LinkButton
        className="mt-[40px] bg-[#18283F] font-bold text-white"
        href="/contact"
      >
        お問い合わせ
      </LinkButton>
      <Copyright className="mt-[40px] block" />
    </footer>
  );
};

const SNSLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/kougakufes',
    icon: <TwitterIcon />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/kougakufes/',
    icon: <InstagramIcon />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC8yEgipIcHHSkRlTLcm4tBw',
    icon: <YoutubeIcon />,
  },
];
const CoESNSLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ibarakiuniversityhitachi/',
    icon: <InstagramIcon />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ibarakiUnivEng/',
    icon: <FacebookIcon />,
  },
];
