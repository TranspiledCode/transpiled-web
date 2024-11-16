import React, { useContext } from 'react';
import styled from '@emotion/styled';
import GlobalContext from 'context/GlobalContext';
import useScrollToTop from 'hooks/useScrollToTop';
import ContactInfo from 'organisms/ContactInfo';
import Icon from 'atoms/Icon';

const Footer = () => {
  const { isExpanded } = useContext(GlobalContext);
  const { isVisible, scrollToTop } = useScrollToTop(false, 20);

  return (
    <Background isExpanded={isExpanded}>
      {isExpanded && <ContactInfo />}
      <ContentWrapper isExpanded={isExpanded}>
        <CopyRight>
          <Icon name="FaCopyright" size={1.5} /> Copyright 2024
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
    </Background>
  );
};

// Styled components
const Background = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.6rem, 2vw, 1.8rem);

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;

  max-height: ${({ isExpanded }) => (isExpanded ? '500px' : '60px')};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};

  padding-bottom: ${({ isExpanded }) => (isExpanded ? '1rem' : '0')};
  transition: padding-bottom 0.5s ease-in-out;
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

const ContactDetails = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  transform: ${({ isExpanded }) =>
    isExpanded ? 'translateY(0)' : 'translateY(-20px)'};
  opacity: ${({ isExpanded }) => (isExpanded ? '1' : '0')};
  transition:
    opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
`;

const ContactItem = styled.div`
  margin-bottom: 0.5rem;
`;

export default Footer;
