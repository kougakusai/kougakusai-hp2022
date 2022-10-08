import clsx from 'clsx';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { Paragraph } from 'components/Typography';
import Head from 'next/head';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';
import { NextPageWithLayout } from './_app';

const Section = ({
  heading,
  className,
  children,
  ...restProps
}: { heading?: string } & ComponentPropsWithoutRef<'section'>) => (
  <section
    className={clsx(
      'rounded-lg bg-white py-6 px-[1.125rem] font-[Roboto] text-[#18283F]',
      className
    )}
    {...restProps}
  >
    {heading && <h2 className="mb-2 font-bold">{heading}</h2>}
    {children}
  </section>
);

const About: NextPageWithLayout = () => (
  <>
    <Head>
      <title>こうがく祭について | 2022年度こうがく祭公式HP</title>
    </Head>

    <main className="flex flex-col gap-y-6">
      <Section heading="こうがく祭とは">
        <Paragraph>
          こうがく祭は毎年11月に開催される茨城大学工学部の学園祭です。
          <br />
          <br />
          工学部ならではの企画や研究室公開などがあり、毎年一般の方や学生の方含め多くの方にご来場いただいております。
          <br />
          <br />
          今年度は3年ぶりの対面開催となりました。
          <br />
          たくさんの企画を用意してお待ちしております！
        </Paragraph>
      </Section>
      <Section heading="公式マスコット「こうがくサイ」">
        <p className="flex justify-center">
          <Image
            src="/about/rhino_stand_happi_withshadow.png"
            alt="公式マスコット「こうがくサイ」"
            width={142}
            height={129}
          />
        </p>
        <Paragraph>
          こうがくサイはこうがく祭公式マスコットキャラクターです。
          <br />
          今年のこうがく祭から晴れて表舞台に登場です。
          <br />
          今年のこうがく祭はたくさんのこうがくサイグッズを用意しています。お楽しみに！
          <br />
        </Paragraph>
      </Section>
      <Section heading="実行委員長挨拶">
        <Paragraph>
          こうがく祭実行委員会委員長の森本拓朗です。
          <br />
          <br />
          茨城大学工学部日立キャンパスで開催されていた学園祭「こうがく祭」は過去2回、コロナ禍によりオンライン形式での開催となりました。そして、今年のこうがく祭は3年ぶりの対面開催となりました。大学関係各所、教職員の皆様、また、日頃よりお世話になっている地域の企業や近隣住民の方々、多くの皆様からのご支援、ご協力によって再びこうがく祭が日立キャンパスで開催できますことを実行委員一同、厚く御礼申し上げます。
          <br />
          <br />
          例年は開催の半年以上前から準備に動き出すことが通常でしたが、新型コロナウイルス感染症による影響で、実行委員が準備を開始できる状態になった時には開催まで半年を切っていました。また、対面開催を経験したことのある現4年生以上の方々は卒業や研究室配属により脱退しており、現委員会は対面開催を経験したことのないメンバーにより構成されています。
          このような状況の中、教職員の皆様やこうがく祭にご協賛いただいた企業の方々、地域住民の方々、限られた時間の中で連日準備を進めてきた実行委員のメンバー、たくさんの方々の協力により開催に向けて準備を進めることができました。
          <br />
          <br />
          3年ぶりの日立キャンパスで、こうがく祭ならではの魅力あふれる企画の数々を楽しんでいただけることを心から願っております。
        </Paragraph>
        <br />
        <Paragraph>
          こうがく祭実行委員会 委員長
          <br />
          森本拓朗
          <br />
          <br />
          <Image
            src="/about/chairperson.png"
            alt="実行委員長写真"
            width={136}
            height={136}
          />
        </Paragraph>
      </Section>
    </main>
  </>
);
About.getLayout = (page) => (
  <DefaultLayout pageTitle="こうがく祭について">{page}</DefaultLayout>
);
export default About;
