import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full pt-24 flex-1 max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
