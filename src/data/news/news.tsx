import { ReactNode } from 'react';
import Image from 'next/image';
import { Paragraph } from 'components/Typography';
import Link from 'next/link';

export type newsDataItemType = {
  date: string;
  category: string;
  title: string;
  detail: string | ReactNode;
};

export const newsData: newsDataItemType[] = [
  {
    date: '2022/11/01',
    category: 'その他',
    title: 'ご来場に関する注意事項が更新されました。',
    detail: (
      <Paragraph>
        こうがく祭の来場に際して、ご注意いただきたい事項について更新しました。
        <Link href="/precaution">
          <a className="underline">ご来場に関する注意事項</a>
        </Link>
        をご確認ください。
      </Paragraph>
    ),
  },
  {
    date: '2022/10/13',
    category: 'その他',
    title: '茨城大学の HP にこうがく祭の記事が掲載されました。',
    detail: (
      <>
        <Paragraph>
          茨城大学の公式 HP に
          <a
            href="https://www.ibaraki.ac.jp/news/2022/10/13011730.html"
            className="underline"
          >
            こうがく祭開催に関する記事
          </a>
          が掲載されました。
        </Paragraph>
        <Paragraph>
          記事は先日のこうがく祭の記者会見の際の発表を受けて掲載されました。
        </Paragraph>
      </>
    ),
  },
  {
    date: '2022/10/11',
    category: 'その他',
    title: '「アクセス」ページが公開されました。',
    detail:
      '2022 年度こうがく祭へ来場される際の交通手段についてご案内しております。',
  },
  {
    date: '2022/09/28',
    category: 'メディア',
    title: 'こうがく祭の記者会見が行われました。',
    detail: (
      <>
        <Paragraph>
          9 月 28 日に茨城大学日立キャンパスの Creative room
          にてこうがく祭開催に関する記者会見を開きました。
        </Paragraph>
        <Paragraph>
          記者会見では、こうがく祭のコンセプトやマスコットのお披露目、一部企画の紹介を実行委員が行いました。
        </Paragraph>
        <div className="mt-4 h-[200px] sm:h-[300px]">
          <Image
            src="/news/press_conf.jpg"
            alt="記者会見の様子"
            width={300}
            height={200}
            layout="fixed"
          />
        </div>
      </>
    ),
  },
  {
    date: '2022/09/26',
    category: '企画',
    title: '企画一覧が公開されました。',
    detail:
      '2022 年度こうがく祭の企画一覧が公開されました。気になる企画を探してみましょう！',
  },
  {
    date: '2022/09/26',
    category: 'その他',
    title: 'ホームページが公開されました。',
    detail:
      '2022 年度こうがく祭のホームページが公開されました。コンテンツは随時アップデートされますので、どうぞお楽しみに！',
  },
];
