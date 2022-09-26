import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { programDate } from 'data/program';
import { ProgramItem } from 'components/ProgramItem';

const Program: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>企画一覧 | 2022年度こうがく祭公式HP</title>
      </Head>

      <main className="flex flex-col gap-6">
        {programDate.map((program) => (
          <ProgramItem
            programName={program.programName}
            groupName={program.groupName}
            place={program.place as 'inside' | 'stage'}
            introduction={program.introduction}
            image={program.image}
            groupLink={program.groupLink}
            key={program.programName}
          />
        ))}
      </main>
    </>
  );
};

Program.getLayout = (page) => (
  <DefaultLayout pageTitle="企画一覧">{page}</DefaultLayout>
);

export default Program;
