import { useEffect } from 'react';

// Custom hook to lock/unlock scroll on the body
const useNoScroll = (isMenuOpen) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Enable scroll
    }

    // Cleanup to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'auto'; // Reset to default
    };
  }, [isMenuOpen]); // Effect runs whenever the menu open state changes
};

export default useNoScroll;
