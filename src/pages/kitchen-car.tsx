import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { kitchenCarData } from 'data/kitchen_car';

const KitchenCarImg = ({
  data,
  className,
  ...restProps
}: {
  data: { name: string; src: string; description: string | string[] };
} & ComponentPropsWithoutRef<'section'>) => (
  <section
    className={clsx('w-[18.75rem] bg-black p-1', className)}
    {...restProps}
  >
    <h2 className="ml-1 text-start font-[sans-serif] text-xs text-white">
      {data.name}
    </h2>
    <Image src={data.src} alt={data.name} width={292} height={120} />
    <p className="flex items-center justify-around text-center font-[sans-serif] text-[0.5rem] text-white">
      {typeof data.description === 'string'
        ? data.description
        : data.description.map((text) => <span key={text}>{text}</span>)}
    </p>
  </section>
);

const KitchenCar: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>キッチンカーグルメ | 2022年度こうがく祭公式HP</title>
      </Head>

      <main className="grid items-center justify-items-center gap-y-6 sm:grid-cols-2 sm:gap-y-16">
        {kitchenCarData.map((data) => (
          <KitchenCarImg data={data} key={data.name} />
        ))}
      </main>
    </>
  );
};

KitchenCar.getLayout = (page) => (
  <DefaultLayout pageTitle="キッチンカーグルメ">{page}</DefaultLayout>
);

export default KitchenCar;
