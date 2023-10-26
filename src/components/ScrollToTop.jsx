// src/components/ScrollToTop.js
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../styles/ThemeProvider';
import styled, { keyframes } from 'styled-components';

const ScrollToTopButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 2px 4px ${(props) => props.theme.shadowColor}
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.neutralGray};

    .icon {
      transform: scale(1.2);
      color: ${(props) => props.theme.primaryColor};
    }
  }

  .icon {
    transition: transform 0.3s ease-in-out;
  }
`;

const ScrollToTop = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    {
      rootMargin: '0px 0px -100% 0px',
    }
  );

  useEffect(() => {
    const target = document.getElementById('top-anchor');
    if (target) {
      observer.observe(target);
    }
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div id='top-anchor'></div>
      {!isVisible && (
        <ScrollToTopButton
          aria-label='Scroll to top'
          theme={theme}
          onClick={scrollToTop}
          className='scroll-to-top-button'
        >
          <FontAwesomeIcon icon={faArrowUp} className='icon' />
        </ScrollToTopButton>
      )}
    </div>
  );
};

export default ScrollToTop;
