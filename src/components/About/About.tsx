import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import { Marquee } from 'components/Marquee';
import { Heading, Paragraph } from 'components/Typography';

export const About = ({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'section'>) => (
  <section
    className={clsx('bg-[#aedf99] text-center', className)}
    {...restProps}
  >
    <Marquee
      direction="left"
      text="KOUGAKUSAI"
      className="mb-[24px] !font-[Roboto] !text-[2.5rem] !font-bold !text-white"
      speed={50}
    />
    <Heading className="mb-[16px]">こうがく祭とは</Heading>
    <Paragraph className="mb-[16px] font-bold">2022.11.05</Paragraph>
    <Paragraph>こうがく祭は茨城大学工学部による学園祭です。</Paragraph>
    <Paragraph>今年は3年ぶりの対面開催になります！</Paragraph>
    <Paragraph>様々なサークル・研究室の企画をご覧ください。</Paragraph>
    <Marquee
      direction="right"
      text="KOUGAKUSAI"
      className="mt-[24px] !font-[Roboto] !text-[2.5rem] !font-bold !text-white"
      speed={50}
    />
  </section>
);
