import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { newsData } from 'data';
import { NewsDetail } from 'components/News';

const Contect: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>お知らせ | 2022年度こうがく祭公式HP</title>
      </Head>

      <main className="flex flex-col gap-[64px]">
        {newsData.map((item) => (
          <NewsDetail key={item.date + item.title} {...item} />
        ))}
      </main>
    </>
  );
};

Contect.getLayout = (page) => (
  <DefaultLayout pageTitle="お知らせ">{page}</DefaultLayout>
);

export default Contect;
