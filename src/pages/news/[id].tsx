import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { newsData } from 'data';
import { LinkButton } from 'components/Button';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { NewsDetailCard } from 'components/News/NewsDetailCard';

const NewsDetail: NextPageWithLayout = () => {
  const news = newsData[Number(useRouter().query.id)];
  return (
    <>
      <Head>
        <title>
          {news?.title || 'お知らせ詳細'} | 2022年度こうがく祭公式HP
        </title>
      </Head>

      <main>
        {news ? (
          <NewsDetailCard {...news} />
        ) : (
          <p>データを取得できませんでした。</p>
        )}
        <LinkButton
          href="/news/"
          className="mt-6 h-10 border border-solid border-[#18283F] text-[#18283F]"
          arrow="left"
        >
          お知らせ一覧へ戻る
        </LinkButton>
      </main>
    </>
  );
};

NewsDetail.getLayout = (page) => (
  <DefaultLayout pageTitle="お知らせ">{page}</DefaultLayout>
);

export default NewsDetail;
