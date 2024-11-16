import { useState, useEffect } from 'react';

const useIntersectionObserver = (ref, options) => {
  const [isVisible, setIsVisible] = useState(false);
  const { onIntersect, ...observerOptions } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const isIntersecting = entry.isIntersecting;
      setIsVisible(isIntersecting);
      if (onIntersect) {
        onIntersect(isIntersecting);
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, onIntersect, observerOptions]);

  return isVisible;
};

export default useIntersectionObserver;
