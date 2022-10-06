import clsx from 'clsx';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { Paragraph } from 'components/Typography';
import Head from 'next/head';
import { ComponentPropsWithoutRef } from 'react';
import { NextPageWithLayout } from './_app';

const H2 = ({
  children,
  className,
  ...restProps
}: ComponentPropsWithoutRef<'h2'>) => (
  <h2 className={clsx('mb-2 font-bold', className)} {...restProps}>
    {children}
  </h2>
);

const SitePolicy: NextPageWithLayout = () => (
  <>
    <Head>
      <title>サイトポリシー | 2022年度こうがく祭公式HP</title>
    </Head>

    <main className="flex flex-col gap-y-4">
      <Paragraph>
        このウェブサイトは、茨城大学こうがく祭の公式ホームページ（以下「当サイト」）です。
        <br />
        <br />
        当サイトは、こうがく祭実行委員会（以下「当委員会」）が作成・管理しています。ご質問やご意見などがありましたら、「お問い合わせ」のページよりお気軽にご連絡ください。
        <br />
        <br />
        なお、サイトポリシーの内容を予告なしに変更する場合がありますので、あらかじめご了承ください。
      </Paragraph>
      <section>
        <H2>免責事項</H2>
        <Paragraph>
          当サイトに情報を掲載するにあたっては細心の注意を払っていますが、情報の正確性および完全性を保証するものではありません。
          <br />
          <br />
          当サイトに掲載されている情報を予告なしに変更する場合があります。
          <br />
          <br />
          当サイトに掲載されている情報を利用したことで生じた損失に関して、当委員会は一切の責任を負いません。
        </Paragraph>
      </section>
      <section>
        <H2>著作権</H2>
        <Paragraph>
          当サイトに掲載されているコンテンツなどは、当委員会または出展企画が著作権を有しており、著作権法によって認められる場合を除き、著作権者の許可なくこれらを利用することはできません。
        </Paragraph>
      </section>
      <section>
        <H2>動作環境</H2>
        <Paragraph>
          当サイトは、Microsoft Edge・Google Chrome・Safari・Mozilla
          Firefoxの最新版で動作することを確認しています。お使いのブラウザやOSによっては、見え方が異なったり、正常に動作しなかったりする可能性があります。
        </Paragraph>
      </section>
      <section>
        <H2>リンク</H2>
        <Paragraph>
          当サイトへのリンクは、当委員会の許可を得ずに掲載することができます。当委員会への事後の通知も不要です。
          ただし、以下の注意事項に該当するか、もしくはその恐れがあるウェブサイトからのリンクは固くお断りいたします。以下に該当しない場合でも、リンク設定方法の変更やリンク削除をお願いする場合があります。
        </Paragraph>
        <br />
        <ul className="list-inside list-disc">
          <li>誹謗中傷や信用失墜を意図する内容を含んだサイト</li>
          <li>
            アダルトコンテンツを含んだサイト
            公序良俗および社会倫理に反する内容を含んだサイト
          </li>
          <li>違法・または違法な可能性を有するコンテンツを含むサイト</li>
          <li>違法・または違法な可能性を有する活動に関わるサイト</li>
          <li>
            フレーム内で当ウェブサイトが展開されるものやその他の方式で、当委員会のウェブサイトであることが不明確になるなど、第三者に誤解を与える可能性があるサイト
          </li>
        </ul>
      </section>
    </main>
  </>
);

SitePolicy.getLayout = (page) => (
  <DefaultLayout pageTitle="サイトポリシー">{page}</DefaultLayout>
);

export default SitePolicy;
