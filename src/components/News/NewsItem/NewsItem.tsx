import { ComponentPropsWithoutRef } from 'react';
import { Paragraph, Small } from 'components/Typography';
import type { newsDataItemType } from 'data';
import Link, { LinkProps } from 'next/link';

export const NewsItem = ({
  date,
  category,
  title,
  detail,
  ...restProps
}: LinkProps & newsDataItemType) => (
  <Link {...restProps}>
    <a>
      <div className="flex gap-[8px]">
        <Small>{date}</Small>
        <Small>|</Small>
        <Small>{category}</Small>
      </div>
      <Paragraph className="mt-[8px]">{title}</Paragraph>
    </a>
  </Link>
);
