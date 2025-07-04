import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-24 flex-1 p-4 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
