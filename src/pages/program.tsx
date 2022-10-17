import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { programData, stageProgramList } from 'data/program';
import { ProgramItem } from 'components/ProgramItem';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import clsx from 'clsx';
import { Paragraph } from 'components/Typography';

const Section = ({
  head,
  children,
  className,
  ...restProps
}: { head?: string } & ComponentPropsWithoutRef<'section'>) => (
  <section
    className={clsx(
      'rounded-lg bg-white p-4 font-[Roboto] text-[#18283F]',
      className
    )}
    {...restProps}
  >
    {head && <h2 className="mb-4 text-base font-bold">{head}</h2>}
    {children}
  </section>
);

const Program: NextPageWithLayout = () => {
  const registProgram: {
    programName: string;
    groupName: string;
    place: string;
    introduction?: ReactNode;
    image?: string | undefined;
    groupLink?: string | undefined;
    twitter?: string | undefined;
    instagram?: string | undefined;
    registration?: boolean | undefined;
  }[] = [];
  programData.forEach((programCategory) => {
    registProgram.push(
      ...programCategory.data.filter((program) => program.registration)
    );
  });
  return (
    <>
      <Head>
        <title>企画一覧 | 2022年度こうがく祭公式HP</title>
      </Head>

      <main className="grid gap-y-6">
        <Section head="企画">
          <a
            href="/program/企画一覧.pdf"
            className="font-[Roboto] text-[#18283F] underline"
          >
            企画一覧
          </a>
        </Section>
        <Section head="ステージ企画">
          <table className="font-[Roboto] text-base text-[#18283F]">
            <tbody>
              {stageProgramList.map((program) => (
                <tr className="h-5 align-top" key={program.start}>
                  <td className="w-16">{program.start}～</td>
                  <td className="">{program.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
        <Section head="スタンプラリー">
          スタンプラリー企画詳細は後日掲載予定
          {/* TODO:<Link href="/program/stamp/"><a className="underline">スタンプラリー企画詳細ページ</a></Link> */}
        </Section>
        {!!registProgram.length && (
          <section className="grid gap-y-4">
            <Paragraph>以下の企画は事前の申し込みが必要です。</Paragraph>
            {registProgram.map((program) => (
              <ProgramItem data={program} key={program.programName} />
            ))}
          </section>
        )}
      </main>
    </>
  );
};

Program.getLayout = (page) => (
  <DefaultLayout pageTitle="企画一覧">{page}</DefaultLayout>
);

export default Program;
