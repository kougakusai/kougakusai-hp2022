import { ComponentPropsWithoutRef } from 'react';
import { Paragraph, Small } from 'components/Typography';

export const NotificationItem = ({
  date,
  category,
  text,
  ...restProps
}: ComponentPropsWithoutRef<'div'> & {
  date: string;
  category: string;
  text: string;
}) => (
  <div {...restProps}>
    <div className="flex gap-[8px]">
      <Small>{date}</Small>
      <Small>|</Small>
      <Small>{category}</Small>
    </div>
    <Paragraph className="mt-[8px]">{text}</Paragraph>
  </div>
);
