// components/Layout.js
import PropTypes from 'prop-types';
import Header from 'organisms/Header';
import Footer from 'organisms/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
