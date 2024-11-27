// hooks/useIsAtBottom.js
import { useState, useEffect } from 'react';

const useIsAtBottom = (offsetInRems = 0) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const offsetInPixels = offsetInRems * remSize;

      if (scrollTop + windowHeight >= docHeight - offsetInPixels) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offsetInRems]);

  return isAtBottom;
};

export default useIsAtBottom;