import Link, { LinkProps } from 'next/link';
import { Small } from 'components/Typography';

export const NewsDetail = ({
  date,
  category,
  title,
  detail,
  ...restProps
}: LinkProps & {
  date: string;
  category: string;
  title: string;
  detail: string;
}) => (
  <Link {...restProps}>
    <a className="block border-b border-b-[#CAC4C4] pt-6 pb-[0.625rem]">
      <Small className="flex gap-x-2">
        {date}
        <span className="border-l border-current" />
        {category}
      </Small>
      <h2 className="mt-[6px] text-base font-bold text-[#18283F]">{title}</h2>
    </a>
  </Link>
);
