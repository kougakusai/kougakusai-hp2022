import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { Paragraph } from 'components/Typography';
import Image from 'next/image';

const Custom500: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>500 Internal Server Error | 2022年度こうがく祭公式HP</title>
      </Head>

      <main className="grid justify-items-center gap-y-8 sm:gap-y-16">
        <Paragraph>
          エラーが発生しました。しばらく時間を置いてから再度アクセスをお願いします。
        </Paragraph>
        <div className="h-64 w-64">
          <Image
            src="/rhino_sleeping.png"
            alt="眠っているこうがくサイ"
            width={256}
            height={256}
          />
        </div>
      </main>
    </>
  );
};

Custom500.getLayout = (page) => (
  <DefaultLayout pageTitle="500 Internal Server Error">{page}</DefaultLayout>
);

export default Custom500;
