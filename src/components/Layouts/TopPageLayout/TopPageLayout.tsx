import { ReactNode } from 'react';
import { Header } from 'components/Header';
import { MenuDrawer } from 'components/Menu';

export const TopPageLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header className="z-20" />
    <MenuDrawer className="z-10" />
    {children}
  </>
);
