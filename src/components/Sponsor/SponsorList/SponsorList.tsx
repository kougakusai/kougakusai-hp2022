import clsx from 'clsx';
import { Heading } from 'components/Typography';
import { ComponentPropsWithoutRef } from 'react';

export const SponsorList = ({
  children,
  ...restProps
}: ComponentPropsWithoutRef<'article'>) => (
  <article {...restProps}>
    <Heading className="text-center">協賛いただいた企業・団体</Heading>
    {children}
  </article>
);
