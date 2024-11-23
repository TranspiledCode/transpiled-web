import React, { useContext } from 'react';
import styled from '@emotion/styled';
import GlobalContext from 'context/GlobalContext';
import useScrollToTop from 'hooks/useScrollToTop';
import Icon from 'atoms/Icon';

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
  width: 100%;
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  padding-top: 2rem;
  padding-bottom: 2rem;

  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.6rem, 2vw, 1.8rem);

  background-color: ${({ theme }) => theme.colors.black};
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
