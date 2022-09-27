import { ComponentPropsWithoutRef } from 'react';
import { Paragraph, Small } from 'components/Typography';

export const NewsItem = ({
  date,
  category,
  title,
  detail,
  ...restProps
}: ComponentPropsWithoutRef<'div'> & {
  date: string;
  category: string;
  title: string;
  detail?: string;
}) => (
  <div {...restProps}>
    <div className="flex gap-[8px]">
      <Small>{date}</Small>
      <Small>|</Small>
      <Small>{category}</Small>
    </div>
    <Paragraph className="mt-[8px]">{title}</Paragraph>
  </div>
);
