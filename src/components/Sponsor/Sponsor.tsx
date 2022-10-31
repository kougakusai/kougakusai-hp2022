import clsx from 'clsx';
import { Paragraph } from 'components/Typography';
import { sponsorData } from 'data/sponsor';
import { ComponentPropsWithoutRef } from 'react';

export const Sponsor = ({
  className,
  ...restProps
}: Omit<ComponentPropsWithoutRef<'section'>, 'children'>) => (
  <section
    className={clsx('px-4 font-[Roboto] text-[#18283F]', className)}
    {...restProps}
  >
    <h2 className="mb-4 text-center text-2xl font-bold">
      協賛いただいた企業・団体
      <br />
      （五十音順・敬称略）
    </h2>
    <Paragraph className="mx-4 mb-7">
      下線付きのご協賛企業名はクリック／タップしていただくと、各企業のホームページへジャンプします。
    </Paragraph>
    <ul className="text-base">
      {sponsorData.map((item) => (
        <li key={item.name}>
          {item.link ? (
            <a
              href={item.link}
              target="_blank"
              className="underline"
              rel="noreferrer noopener"
            >
              {item.name}
            </a>
          ) : (
            item.name
          )}
        </li>
      ))}
    </ul>
  </section>
);
