import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { TopPageLayout } from 'components/Layouts';
import { Landing } from 'components/Landing';
import { NewsList } from 'components/News';
import { About } from 'components/About';
import { SponsorList } from 'components/Sponsor';
import { Footer } from 'components/Footer';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>2022年度こうがく祭公式HP | 茨城大学</title>
      </Head>

      <main>
        <Landing />
        <NewsList className="m-[16px]" />
        <About className="mt-[80px]" />
        <SponsorList className="mt-[24px] h-[200px]" />
        <Footer />
      </main>
    </>
  );
};

Home.getLayout = (page) => <TopPageLayout>{page}</TopPageLayout>;

export default Home;
