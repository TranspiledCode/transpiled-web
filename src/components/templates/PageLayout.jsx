// components/Layout.js
import PropTypes from 'prop-types';
import Header from 'organisms/SampleHeader';
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
