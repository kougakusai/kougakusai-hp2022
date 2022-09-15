import Image from 'next/image';
import { RoundedButton } from 'components/Button';
import { CountDown } from 'components/CountDown';
import { useMobileView } from 'hooks/useMobileView';
import KougakusaiTitle from '@public/kougakusai_title.png';
import RhinoHappi from '@public/rhino_happi.png';
import RhinoMachine from '@public/rhino_machine.png';
import UnivLogo from '@public/univ_logo.png';

export const Landing = () => {
  const isMobile = useMobileView();

  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="w-full bg-[url('/background_lines.png')] bg-cover bg-bottom text-center">
      <div className="relative top-[-32px] left-1/2 translate-x-[-50%] rotate-[-142deg] sm:top-[-48px]">
        <Image
          src={RhinoHappi}
          alt="はっぴを着たこうがくサイ"
          width={isMobile ? 104 : 160}
          height={isMobile ? 104 : 160}
        />
      </div>
      <div>
        <Image
          src={UnivLogo}
          alt="茨城大学のロゴマーク"
          width={isMobile ? 70 : 140}
          height={isMobile ? 40 : 80}
        />
      </div>
      <div>
        <Image
          src={KougakusaiTitle}
          alt="こうがく祭"
          width={isMobile ? 300 : 600}
          height={isMobile ? 170 : 340}
        />
      </div>
      <CountDown className="mx-auto" />
      <RoundedButton className="mt-[32px]">詳しく見る</RoundedButton>
      <div className="sm:mt-[-400px]">
        <Image
          src={RhinoMachine}
          alt="宇宙サイの宇宙船"
          width={isMobile ? 400 : 1440}
          height={isMobile ? 240 : 760}
          className="sm:-z-10"
        />
      </div>
    </div>
  );
};