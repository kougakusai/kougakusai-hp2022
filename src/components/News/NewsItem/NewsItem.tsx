import { ComponentPropsWithoutRef } from 'react';
import { Paragraph, Small } from 'components/Typography';
import type { newsDataItemType } from 'data';

export const NewsItem = ({
  date,
  category,
  title,
  detail,
  ...restProps
}: ComponentPropsWithoutRef<'div'> & newsDataItemType) => (
  <div {...restProps}>
    <div className="flex gap-[8px]">
      <Small>{date}</Small>
      <Small>|</Small>
      <Small>{category}</Small>
    </div>
    <Paragraph className="mt-[8px]">{title}</Paragraph>
  </div>
);
