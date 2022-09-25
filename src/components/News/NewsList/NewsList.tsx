import { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Heading } from 'components/Typography';
import { LinkButton } from 'components/Button';
import { NewsItem } from '../NewsItem';

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
    {News.map((item) => (
      <NewsItem key={item.date + item.text} className="mt-[24px]" {...item} />
    ))}
    <div className="flex justify-center">
      <LinkButton className="mt-[24px] items-center border border-solid border-[#18283F] font-bold text-[#18283F]">
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

const News = [
  {
    date: '2022/9/22',
    category: 'その他',
    text: 'トップページを更新しました。',
  },
];
