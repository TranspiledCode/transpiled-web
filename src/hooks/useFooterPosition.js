// hooks/useFooterPosition.js
import { useState, useEffect } from 'react';

const useFooterPosition = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Check if we're at the bottom of the page
      const isBottom = windowHeight + scrollTop >= documentHeight - 10; // 10px threshold
      setIsAtBottom(isBottom);

      // If we're at the bottom, footer should be inline
      if (isBottom) {
        setIsSticky(false);
        return;
      }

      // If we're scrolling and not at the bottom, footer should be sticky
      setIsSticky(scrollTop > 100); // Start showing sticky after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isSticky, isAtBottom };
};

export default useFooterPosition;
