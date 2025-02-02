import { useState, useEffect } from 'react';

const useIntersectionObserver = (ref, options) => {
  const [isVisible, setIsVisible] = useState(false);
  const { onIntersect, ...observerOptions } = options;

  useEffect(() => {
    const currentRef = ref.current; // Store ref.current in a variable
    const observer = new IntersectionObserver(([entry]) => {
      const isIntersecting = entry.isIntersecting;
      setIsVisible(isIntersecting);
      if (onIntersect) {
        onIntersect(isIntersecting);
      }
    }, observerOptions);

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, onIntersect, observerOptions]);

  return isVisible;
};

export default useIntersectionObserver;
