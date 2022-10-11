import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { Paragraph } from 'components/Typography';
import { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { BusTimeTable } from 'components/BusTimeTable';

const Section = ({
  className,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'section'>) => (
  <section
    className={clsx('rounded-lg bg-white py-4 px-[1.125rem]', className)}
    {...restProps}
  >
    {children}
  </section>
);
const H2 = ({
  className,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'h2'>) => (
  <h2 className={clsx('mb-2 font-bold', className)} {...restProps}>
    {children}
  </h2>
);

const Access: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>アクセス | 2022年度こうがく祭公式HP</title>
      </Head>

      <main className="flex flex-col gap-y-6 font-[Roboto] text-[#18283F]">
        <Section>
          <H2>住所</H2>
          <Paragraph>〒316-8511 茨城県日立市中成沢町4-12-1</Paragraph>
          <br />
          <H2>最寄駅</H2>
          <ul className="list-inside list-disc">
            <li>日立駅（徒歩約40分）</li>
            <li>常陸多賀駅（徒歩約33分）</li>
          </ul>
        </Section>
        <Section>
          <H2>バスでお越しの方</H2>
          <Paragraph>
            こうがく祭当日は、こうがく祭臨時便を増発しています。会場へは、便利な茨城交通バスをご利用ください。
            <strong>茨大前（日立）</strong>
            停留所でお降りください。お帰りの際は茨大前（日立）通過予定時刻をご確認ください。
          </Paragraph>
          <br />
          <Paragraph className="text-[#DC2626]">
            ※現金または「<strong>でんてつハイカード</strong>
            」でのお支払いが可能です。いばっぴ、その他交通系ICカードは利用できませんのでご注意ください。
          </Paragraph>
          <br />
        </Section>
        <section className="rounded-lg bg-white py-4 px-2 [@media_screen_and_(min-width:400px)]:px-[1.125rem]">
          <H2 className="ml-4 sm:ml-0">バス時刻表（当日）</H2>
          <BusTimeTable />
        </section>
      </main>
    </>
  );
};

Access.getLayout = (page) => (
  <DefaultLayout pageTitle="アクセス">{page}</DefaultLayout>
);

export default Access;
