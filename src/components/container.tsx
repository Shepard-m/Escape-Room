import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

type TPropsContainer = {
  children: ReactNode;
  mainClass: string;
  isLogin?: boolean;
}

export default function Container({ children, mainClass, isLogin }: TPropsContainer) {
  return (
    <div className="wrapper">
      <Header isLogin={isLogin} />
      <main className={mainClass}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
