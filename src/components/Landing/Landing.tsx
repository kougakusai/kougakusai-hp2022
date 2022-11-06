import Image from 'next/image';
import { RoundedButton } from 'components/Button';
import { CountDown } from 'components/CountDown';
import { useMobileView } from 'hooks/useMobileView';
import { EndCard } from 'components/EndCard';

export const Landing = () => {
  const isMobile = useMobileView();

  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="w-full bg-[url('/background_lines.png')] bg-cover bg-bottom text-center">
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <div className="h-full w-full bg-[url('/rhino_machine.png')] bg-contain bg-bottom bg-no-repeat pb-52 text-center sm:pb-24">
        <div className="relative top-[-32px] left-1/2 translate-x-[-50%] rotate-[-142deg] sm:top-[-48px]">
          <Image
            src="/rhino_happi.png"
            alt="はっぴを着たこうがくサイ"
            width={isMobile ? 104 : 160}
            height={isMobile ? 104 : 160}
          />
        </div>
        <div>
          <Image
            src="/univ_logo.png"
            alt="茨城大学のロゴマーク"
            width={isMobile ? 80 : 160}
            height={isMobile ? 50 : 100}
          />
        </div>
        <div>
          <Image
            src="/kougakusai_title.png"
            alt="こうがく祭"
            width={isMobile ? 300 : 600}
            height={isMobile ? 170 : 340}
          />
        </div>
        <CountDown className="mx-auto" />
        {/* TODO:終了後`CountDown`と入れ替えで有効化 */}
        {/* <EndCard /> */}
        <RoundedButton
          href="#お知らせ"
          title="お知らせを見る"
          className="mt-[32px]"
        >
          詳しくみる
        </RoundedButton>
      </div>
    </div>
  );
};
