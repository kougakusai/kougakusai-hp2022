import { NextPageWithLayout } from './_app';
import { DefaultLayout } from 'components/Layouts/DefaultLayout';
import Head from 'next/head';
import { Paragraph } from 'components/Typography';

const Precaution: NextPageWithLayout = () => (
  <>
    <Head>
      <title>ご来場に関する注意事項 | 茨城大学</title>
    </Head>

    <main className="grid gap-y-8 font-[Roboto] text-base text-[#18283F]">
      <section>
        <h2 className="font-bold">ご来場に関する注意事項</h2>
        <Paragraph>
          コロナウイルス感染拡大防止のため、以下の症状のある方はご来場をお控えください。
        </Paragraph>
        <ul className="list-inside list-disc">
          <li>体温が37.5度以上である。</li>
          <li>咽頭痛がある。</li>
          <li>嗅覚や味覚に異常がある。</li>
          <li>倦怠感がある。</li>
          <li>下痢症状がある。</li>
          <li>頭痛がする。</li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold">当日のキャンパス内での注意事項</h2>
        <Paragraph>
          コロナウイルス感染拡大防止のため、以下のことを遵守するようお願いします。
        </Paragraph>
        <ul className="list-inside list-disc">
          <li>
            マスクの着用をする。
            <br />
            ※マスクを着用できない場合は入構をお断りする場合がございます。
          </li>
          <li>入構及び各施設に入館する際は、手洗い・消毒を徹底する。</li>
          <li>
            密集しないよう努め、ソーシャルディスタンス（最低1m以上）の確保に努める。
          </li>
          <li>食べ歩き、飲み歩きをしない。</li>
          <li>キャンパスで飲酒をしない。</li>
          <li>定められた入構時間・入構場所を遵守する。</li>
          <li>企画観覧中の大声での歓声などを控える。</li>
          <li>
            入退構や企画の観覧などに際し、こうがく祭を安全かつ円滑に実施するためにこうがく祭実行委員会の指示に従う。
          </li>
        </ul>
      </section>
    </main>
  </>
);
Precaution.getLayout = (page) => (
  <DefaultLayout pageTitle="ご来場に関する注意事項">{page}</DefaultLayout>
);
export default Precaution;
