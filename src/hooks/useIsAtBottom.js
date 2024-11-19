// Custom hook for detecting if user has scrolled to bottom
import { useState, useEffect } from 'react';

const useIsAtBottom = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 1);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isAtBottom;
};

export default useIsAtBottom;
