import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { newsData } from 'data';
import { NewsDetail } from 'components/News';
import Link from 'next/link';

const News: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>お知らせ | 2022年度こうがく祭公式HP</title>
      </Head>

      <main>
        {newsData.map((item, index) => (
          <NewsDetail href={`/news/${index}`} {...item} key={index} />
        ))}
      </main>
    </>
  );
};

News.getLayout = (page) => (
  <DefaultLayout pageTitle="お知らせ">{page}</DefaultLayout>
);

export default News;
