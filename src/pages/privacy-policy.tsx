import clsx from 'clsx';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { Paragraph } from 'components/Typography';
import Head from 'next/head';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { NextPageWithLayout } from './_app';

const H2 = ({
  className,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'h2'>) => (
  <h2
    className={clsx('mb-2 font-[Roboto] font-bold text-[#18283F]', className)}
  >
    {children}
  </h2>
);

const PrivacyPolicy: NextPageWithLayout = () => (
  <>
    <Head>
      <title>プライバシーポリシー | 茨城大学</title>
    </Head>

    <main className="flex flex-col gap-y-4">
      <Paragraph>
        こうがく祭実行委員会（以下「当委員会」）は，本ウェブサイト上（以下「当サイト」）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
        <br />
        <br />
        なお、プライバシーポリシーの内容を予告なしに変更する場合がありますので、あらかじめご了承ください。
      </Paragraph>
      <section>
        <H2>個人情報の利用目的</H2>
        <Paragraph>
          当サイトでは、お問い合わせ時に、お名前、メールアドレス等の個人情報をご登録いただく場合がございますが、これらの個人情報はご提供いただく際の目的以外では利用いたしません。
          お預かりした個人情報は、当委員会からのご質問に対する回答等に利用いたします。
        </Paragraph>
      </section>
      <section>
        <H2>個人情報の安全管理</H2>
        <Paragraph>
          当委員会は、ご提供いただいた個人情報を正確にデータ処理し、当委員会が保有する個人情報の安全性を確保するため、適切な保護・安全対策を実施し、個人情報の紛失、破壊、改ざん、漏えいの防止に努めます。
        </Paragraph>
      </section>
      <section>
        <H2>個人情報の第三者への開示・提供の禁止</H2>
        <Paragraph>
          当委員会は、個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
        </Paragraph>
        <br />
        <ul className="list-inside list-disc text-[#18283F] font-{Roboto]">
          <li>ご本人様の同意がある場合</li>
          <li>法令に基づき開示することが必要である場合</li>
          <li>人の生命、身体又は財産の保護のために必要がある場合</li>
        </ul>
      </section>
      <section>
        <H2>ご本人の照会</H2>
        <Paragraph>
          ご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人様であることを確認の上、対応させていただきます。ご本人であることが確認できない場合には、照会に応じません。
        </Paragraph>
      </section>
      <section>
        <H2>お問い合わせ</H2>
        <Link href="/contact">
          <a className="underline">「お問い合わせ」ページ</a>
        </Link>
      </section>
    </main>
  </>
);
PrivacyPolicy.getLayout = (page) => (
  <DefaultLayout pageTitle="プライバシーポリシー">{page}</DefaultLayout>
);
export default PrivacyPolicy;
