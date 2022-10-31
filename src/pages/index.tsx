import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { TopPageLayout } from 'components/Layouts';
import { Landing } from 'components/Landing';
import { NewsList } from 'components/News';
import { About } from 'components/About';
import { Footer } from 'components/Footer';
import { Sponsor } from 'components/Sponsor';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>2022年度こうがく祭公式HP | 茨城大学</title>
      </Head>

      <main>
        <Landing />
        <NewsList id="お知らせ" className="mx-auto my-[16px] max-w-[37.5rem]" />
        <About className="mt-[80px]" />
        <Sponsor className="mx-auto my-6 max-w-[37.5rem]" />
        <Footer className="mt-6" />
      </main>
    </>
  );
};

Home.getLayout = (page) => <TopPageLayout>{page}</TopPageLayout>;

export default Home;
