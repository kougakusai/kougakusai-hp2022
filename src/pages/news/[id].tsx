import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { newsData } from 'data';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';

const NewsDetail: NextPageWithLayout = () => {
  const id = Number(useRouter().query.id);
  const news = newsData[id];
  return news ? (
    <>
      <Head>
        <title>{news.title} | 2022年度こうがく祭公式HP</title>
      </Head>

      <main>
        <section className="rounded-lg bg-white p-4 font-[Roboto] text-[#18283F]">
          <p className="text-xs">
            {news.date}
            <span className="mx-2 border-l border-l-current" />
            {news.category}
          </p>
          <h2 className="mt-1 mb-4 text-base font-bold">{news.title}</h2>
          {typeof news.detail === 'string' ? <p>{news.detail}</p> : news.detail}
        </section>
        <p className="mt-4 text-right">
          <Link href="/news/">
            <a className="font-[Roboto] text-[#18283F]">お知らせ一覧へ戻る</a>
          </Link>
        </p>
      </main>
    </>
  ) : (
    <main>
      <p>データを取得できませんでした。</p>
    </main>
  );
};

NewsDetail.getLayout = (page) => (
  <DefaultLayout pageTitle="お知らせ">{page}</DefaultLayout>
);

export default NewsDetail;
