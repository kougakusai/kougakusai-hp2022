import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { kitchenCarData } from 'data/kitchen_car';
import { KitchenCarImg } from 'components/KitchenCar';

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
