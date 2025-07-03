import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import React from 'react';

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="mt-16">{children}</div>
      <Footer />
    </>
  );
};

export default HomepageLayout;
