// Footer.js
import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import GlobalContext from 'context/GlobalContext';
import useScrollToTop from 'hooks/useScrollToTop';
import ContactInfo from 'organisms/ContactInfo';
import Icon from 'atoms/Icon';
import RevealWrapper from 'molecules/RevealWrapper';

const Footer = () => {
  const { isExpanded } = useContext(GlobalContext);
  const { isVisible, scrollToTop } = useScrollToTop(false, 20);

  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if the user has scrolled to the bottom
      if (scrollTop + windowHeight >= documentHeight - 1) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call handleScroll initially to set the correct state on load
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the footer should be static
  const isFooterStatic = isExpanded || isAtBottom;

  return (
    <FooterWrapper isExpanded={isExpanded} isFooterStatic={isFooterStatic}>
      {isExpanded && (
        <RevealWrapper>
          <ContactInfo />
          <ContentWrapper isExpanded={isExpanded}>
            <CopyRight>
              <Icon name="FaCopyright" size={1.5} /> Transpiled 2024
            </CopyRight>
            <ScrollTop
              aria-label="Scroll to top"
              onClick={scrollToTop}
              isVisible={isVisible}
            >
              Scroll to Top
              <Icon name="FaArrowUp" size={1.5} />
            </ScrollTop>
          </ContentWrapper>
        </RevealWrapper>
      )}
      {!isExpanded && (
        <ContentWrapper isExpanded={isExpanded}>
          <CopyRight>
            <Icon name="FaCopyright" size={1.5} /> Transpiled 2024
          </CopyRight>
          <ScrollTop
            aria-label="Scroll to top"
            onClick={scrollToTop}
            isVisible={isVisible}
          >
            Scroll to Top
            <Icon name="FaArrowUp" size={1.5} />
          </ScrollTop>
        </ContentWrapper>
      )}
    </FooterWrapper>
  );
};

// Styled components
const FooterWrapper = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.6rem, 2vw, 1.8rem);

  /* Adjust position based on isFooterStatic */
  position: ${({ isFooterStatic }) => (isFooterStatic ? 'static' : 'fixed')};
  bottom: ${({ isFooterStatic }) => (isFooterStatic ? 'auto' : '0')};
  left: 0;
  z-index: 1000;

  max-height: ${({ isExpanded }) => (isExpanded ? '200px' : '60px')};
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};

  padding-bottom: ${({ isExpanded }) => (isExpanded ? '1rem' : '0')};
`;

const CopyRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.white};
`;

const ScrollTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export default Footer;
