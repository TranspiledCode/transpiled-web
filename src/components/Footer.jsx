import React from 'react';
import styled from '@emotion/styled';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 7rem;
  width: 100%;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 6rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
`;
const CopyRight = styled.div`
  font-family: Manrope;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;
const ScrollTop = styled.div`
  font-family: Manrope;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;
const Footer = () => {
  return (
    <Background>
      <ContentWrapper>
        <CopyRight>&#169; Copyright 2024</CopyRight>
        <ScrollTop>Scroll to Top &#8593;</ScrollTop>
      </ContentWrapper>
    </Background>
  );
};

export default Footer;
