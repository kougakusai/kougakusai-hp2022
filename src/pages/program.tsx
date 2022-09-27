import type { NextPageWithLayout } from 'pages/_app';
import Head from 'next/head';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import { programData } from 'data/program';
import { ProgramItem } from 'components/ProgramItem';

const Program: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>企画一覧 | 2022年度こうがく祭公式HP</title>
      </Head>

      <main className="flex flex-col gap-y-4 divide-y-2">
        {programData.map((program) => (
          <section className="flex flex-col gap-6" key={program.variety}>
            <h3>{program.variety}</h3>
            {program.data.map((item) => (
              <ProgramItem data={item} key={item.groupName} />
            ))}
          </section>
        ))}
      </main>
    </>
  );
};

Program.getLayout = (page) => (
  <DefaultLayout pageTitle="企画一覧">{page}</DefaultLayout>
);

export default Program;
