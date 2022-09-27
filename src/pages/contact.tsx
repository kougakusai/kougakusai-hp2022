import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { Paragraph } from 'components/Typography';

const Contect: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>お問い合わせ | 2022年度こうがく祭公式HP</title>
      </Head>

      <main>
        <Paragraph className="font-bold">茨城大学工学部キャンパス</Paragraph>
        <Paragraph className="mt-[8px]">
          &#12306;316-8511&nbsp;茨城県日立市中成沢町4-12-1
        </Paragraph>
        {/* TODO 新問い合わせ用メールアドレス決定後更新 */}
        {/* <br />
        <Paragraph className="font-bold">E-mail</Paragraph>
        <Paragraph className="mt-[8px]">
          <a
            href="mailto:e-mail_address@example.com"
            title="e-mail_address@example.comへ電子メールで問い合わせ"
            className="underline"
          >
            e-mail_address@example.com
          </a>
        </Paragraph> */}
      </main>
    </>
  );
};

Contect.getLayout = (page) => (
  <DefaultLayout pageTitle="お問い合わせ">{page}</DefaultLayout>
);

export default Contect;
