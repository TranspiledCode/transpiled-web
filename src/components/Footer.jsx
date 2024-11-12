import React, { useContext } from 'react';
import styled from '@emotion/styled';
import GlobalContext from 'context/GlobalContext';
import useScrollToTop from 'hooks/useScrollToTop';
import Icon from 'components/Icon';

const Footer = () => {
  const { menuOpen } = useContext(GlobalContext);
  const { isVisible, scrollToTop } = useScrollToTop(menuOpen, 20);

  return (
    <Background>
      <ContentWrapper>
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

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 7rem;
  padding: 0 2rem;

  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.8rem;

  background-color: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    padding: 0 6rem;
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

const ScrollTop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
`;

export default Footer;
