// components/Layout.js
import { Outlet } from 'react-router-dom';
import Header from 'organisms/Header';
import Footer from 'organisms/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
