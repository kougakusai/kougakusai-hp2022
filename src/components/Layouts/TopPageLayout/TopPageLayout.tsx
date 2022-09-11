import { ReactNode } from 'react';
import { Header } from 'components/Header';

export const TopPageLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
  </>
);
