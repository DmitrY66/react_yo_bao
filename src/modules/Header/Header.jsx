import { useEffect, useState } from 'react';
import { HeaderInfo } from '../HeaderInfo/HeaderInfo';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import st from './Header.module.css';

export const Header = () => {
  const [headerFix, setHeaderFix] = useState(false);

  const handlerNavFixed = () => {
    if (window !== undefined) {
      const heightWindow = window.scrollY;
      heightWindow > 75 ? setHeaderFix(true) : setHeaderFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handlerNavFixed);

    return () => {
      window.removeEventListener('scroll', handlerNavFixed);
    };
  }, []);

  return (
    <header className={`${st.header} ${headerFix ? st.fixedHeader : ''}`}>
      <HeaderInfo />
      <HeaderNav />
    </header>
  )
};
