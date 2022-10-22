import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { Paragraph } from 'components/Typography';
import Image from 'next/image';
import { LinkButton } from 'components/Button';

const Custom404: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>404 NotFound | 2022年度こうがく祭公式HP</title>
      </Head>

      <main className="grid items-center justify-center gap-y-8 sm:gap-y-16">
        <Paragraph>
          ページが存在しません。URLが間違っている可能性があります。
        </Paragraph>
        <div className="flex flex-col items-center justify-between gap-y-8 sm:flex-row sm:gap-x-16">
          <Image
            src="/rhino_magnifying_glass.png"
            alt="虫眼鏡を持ったこうがくサイの画像"
            width={256}
            height={256}
          />
          <LinkButton
            href="/"
            className="h-10 bg-[#18283F] text-white sm:mt-40 sm:self-start"
            arrow="right"
          >
            トップに戻る
          </LinkButton>
        </div>
      </main>
    </>
  );
};

Custom404.getLayout = (page) => (
  <DefaultLayout pageTitle="404 NotFound">{page}</DefaultLayout>
);

export default Custom404;
