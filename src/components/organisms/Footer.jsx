// Footer.js
import React from 'react';
import styled from '@emotion/styled';
import useIsAtBottom from 'hooks/useIsAtBottom';
import ContactInfo from 'organisms/ContactInfo';

import MiniFooter from 'molecules/MiniFooter';

const BaseFooter = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColCenter};
  background-color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: -0.01em;
  z-index: ${({ theme }) => theme.zIndices.footer};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;

const MiniFooterWrapper = styled(BaseFooter)`
  position: fixed;
  bottom: 0;
  left: 0;
  padding-top: 0;
  padding-bottom: 0;
  height: 4rem;
`;

const MainFooter = styled(BaseFooter)`
  position: relative;

  ${({ theme }) => theme.mediaQueries.md} {
    height: 17rem;
  }
`;

const Footer = () => {
  const isAtBottom = useIsAtBottom(16);

  return (
    <>
      {!isAtBottom && (
        <MiniFooterWrapper>
          <MiniFooter />
        </MiniFooterWrapper>
      )}
      <MainFooter>
        <ContactInfo />
        <MiniFooter />
      </MainFooter>
    </>
  );
};
export default Footer;
