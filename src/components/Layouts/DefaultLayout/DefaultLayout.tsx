import { ReactNode } from 'react';
import { Header } from 'components/Header';
import { MenuDrawer } from 'components/Menu';
import { Heading } from 'components/Typography';
import { Copyright } from 'components/Copyright';

export const DefaultLayout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: ReactNode;
}) => (
  <>
    <Header className="z-20" />
    <MenuDrawer className="z-10" />
    <div className="pt-[80px]">
      <Heading className="text-center">{pageTitle}</Heading>
      <div className="mx-auto my-[32px] w-[90%] max-w-[800px]">{children}</div>
      <Copyright className="block pb-[24px] text-center" />
    </div>
  </>
);
