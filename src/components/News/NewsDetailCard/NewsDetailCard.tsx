import clsx from 'clsx';
import { Paragraph, Small } from 'components/Typography';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export const NewsDetailCard = ({
  date,
  title,
  category,
  detail,
  className,
  ...restProps
}: {
  date: string;
  title: string;
  category: string;
  detail: string | ReactNode;
} & ComponentPropsWithoutRef<'section'>) => (
  <section
    className={clsx(
      'rounded-lg bg-white p-4 font-[Roboto] text-[#18283F]',
      className
    )}
    {...restProps}
  >
    <Small className="flex gap-x-2">
      {date}
      <span className="border-l border-l-current" />
      {category}
    </Small>
    <h2 className="mt-1 mb-4 font-[Roboto] text-base font-bold text-[#18283F]">
      {title}
    </h2>
    {typeof detail === 'string' ? <Paragraph>{detail}</Paragraph> : detail}
  </section>
);
