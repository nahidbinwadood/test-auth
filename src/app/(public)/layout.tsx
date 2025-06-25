import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import React from 'react';

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomepageLayout;
