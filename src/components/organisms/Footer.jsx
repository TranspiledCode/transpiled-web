// Footer.js
import React from 'react';
import styled from '@emotion/styled';
import useScrollToTop from 'hooks/useScrollToTop';
import useIsAtBottom from 'hooks/useIsAtBottom';
import ContactInfo from 'organisms/ContactInfo';
import Icon from 'atoms/Icon';

const Footer = () => {
  const { scrollToTop } = useScrollToTop(false, 20);
  const isAtBottom = useIsAtBottom();

  return (
    <>
      {/* Mini footer that shows/hides based on scroll */}
      <MiniFooter show={!isAtBottom}>
        <ContentWrapper>
          <CopyRight>
            <Icon name="FaCopyright" size={1.5} /> Transpiled 2024
          </CopyRight>
          <ScrollTop aria-label="Scroll to top" onClick={scrollToTop}>
            Scroll to Top
            <Icon name="FaArrowUp" size={1.5} />
          </ScrollTop>
        </ContentWrapper>
      </MiniFooter>

      {/* Main footer that's always at the bottom of the page */}
      <MainFooter>
        <ContactInfo />
        <ContentWrapper>
          <CopyRight>
            <Icon name="FaCopyright" size={1.5} /> Transpiled 2024
          </CopyRight>
          <ScrollTop aria-label="Scroll to top" onClick={scrollToTop}>
            Scroll to Top
            <Icon name="FaArrowUp" size={1.5} />
          </ScrollTop>
        </ContentWrapper>
      </MainFooter>
    </>
  );
};

// Base footer styles shared between mini and main footers
const footerBaseStyles = ({ theme }) => `
  width: 100%;
  ${theme.mixins.flexColCenter};
  padding: 2rem 4rem;
  background-color: ${theme.colors.black};
  font-family: ${theme.fonts.manrope};
  font-size: clamp(1.6rem, 2vw, 1.8rem);
  z-index: 500
`;

// Mini footer that shows/hides based on scroll position
const MiniFooter = styled.div`
  ${({ theme }) => footerBaseStyles({ theme })};
  position: fixed;
  bottom: 0;
  left: 0;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '0' : '100%')});
  transition: all 0.3s ease;
  height: 6rem; // Fixed height for mini footer
`;

// Main footer that's always at the bottom of the page
const MainFooter = styled.div`
  ${({ theme }) => footerBaseStyles({ theme })};
  position: relative;

  ${({ theme }) => theme.mediaQueries.md} {
    max-height: 20rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
`;

const CopyRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

const ScrollTop = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font: inherit;

  &:hover {
    opacity: 0.8;
  }
`;

export default Footer;
