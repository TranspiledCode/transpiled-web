import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the current viewport is mobile
 * @param {number} breakpoint - The width in pixels below which is considered mobile
 * @returns {boolean} - Whether the current viewport is mobile
 */
const useIsMobile = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Initial check
    checkIfMobile();

    // Add listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
