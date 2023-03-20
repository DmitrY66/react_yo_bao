import { Outlet } from 'react-router-dom';
import { Footer } from 'src/modules/Footer/Footer';
import { Header } from 'src/modules/Header/Header';

export const Layout = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};
