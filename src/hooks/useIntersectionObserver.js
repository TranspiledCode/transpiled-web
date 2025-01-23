// hooks/useIntersectionObserver.js
import { useState, useEffect } from 'react';
import { useScrollDirection } from './useScrollDirection';

const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Only show animation when scrolling down and element hasn't been animated yet
      if (entry.isIntersecting && scrollDirection === 'down' && !hasAnimated) {
        setIsIntersecting(true);
        setHasAnimated(true);
      }
      // When scrolling up, don't reset the animation
      else if (!entry.isIntersecting && !hasAnimated) {
        setIsIntersecting(false);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, scrollDirection, hasAnimated]);

  return isIntersecting;
};

export default useIntersectionObserver;
