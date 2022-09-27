import { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Heading } from 'components/Typography';
import { LinkButton } from 'components/Button';
import { NewsItem } from '../NewsItem';
import { newsData } from 'data';

export const NewsList = ({
  children,
  className,
  ...restProps
}: ComponentPropsWithoutRef<'section'>) => (
  <section
    className={clsx('relative rounded-xl bg-white p-[16px]', className)}
    {...restProps}
  >
    <Heading className="text-center">お知らせ</Heading>
    {newsData.map((item) => (
      <NewsItem key={item.date + item.title} className="mt-[24px]" {...item} />
    ))}
    <div className="flex justify-center">
      <LinkButton
        href="/news"
        className="mt-[24px] items-center border border-solid border-[#18283F] font-bold text-[#18283F]"
      >
        もっと見る
      </LinkButton>
    </div>
    <div className="absolute bottom-0 left-0 translate-x-[-20%] translate-y-[40%]">
      <Image
        src="/rhino_pc.png"
        alt="PCを操作するこうがくサイ"
        height={200}
        width={200}
      />
    </div>
  </section>
);
