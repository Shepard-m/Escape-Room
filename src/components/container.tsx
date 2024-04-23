import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type TPropsContainer = {
  children: ReactNode;
  mainClass: string;
}

export default function Container({ children, mainClass }: TPropsContainer) {
  return (
    <div className="wrapper">
      <Header />
      <main className={mainClass}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
