// components/Layout.js
import React, { useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import Header from 'organisms/SampleHeader';
import Footer from 'organisms/Footer';
import GlobalContext from 'context/GlobalContext';
import useIntersectionObserver from 'hooks/useIntersectionObserver';

const Layout = ({ children }) => {
  const { setIsExpanded } = useContext(GlobalContext);
  const sentinelRef = useRef(null);

  // Use your existing Intersection Observer hook
  useIntersectionObserver(sentinelRef, {
    threshold: 0.1,
    onIntersect: setIsExpanded, // Callback to update global state
  });

  return (
    <>
      <Header />
      {children}
      {/* Sentinel element placed after the page content */}
      <div ref={sentinelRef} />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
