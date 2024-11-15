// useScrollToTop.js
import { useState, useEffect } from 'react';

/**
 * Custom hook to manage the visibility and behavior of a scroll-to-top button.
 *
 * @param {boolean} menuOpen - Indicates if the menu is open. When true, the button won't be visible.
 * @param {number} scrollThreshold - The scroll position (in pixels) after which the button becomes visible.
 * @returns {Object} - An object containing the visibility state and the scroll-to-top function.
 */
const useScrollToTop = (menuOpen = false, scrollThreshold = 20) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold && !menuOpen) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen, scrollThreshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { isVisible, scrollToTop };
};

export default useScrollToTop;
