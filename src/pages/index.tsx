import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { TopPageLayout } from 'components/Layouts';
import { Landing } from 'components/Landing';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>2022年度こうがく祭公式HP | 茨城大学</title>
      </Head>

      <main>
        <Landing />
      </main>
    </>
  );
};

Home.getLayout = (page) => <TopPageLayout>{page}</TopPageLayout>;

export default Home;
