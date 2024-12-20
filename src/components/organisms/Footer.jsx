// Footer.js
import React from 'react';
import styled from '@emotion/styled';
import useIsAtBottom from 'hooks/useIsAtBottom';
import ContactInfo from 'organisms/ContactInfo';

import MiniFooter from 'molecules/MiniFooter';

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

// BaseFooter styles
const BaseFooter = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  background-color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.6rem, 2vw, 1.8rem);
  z-index: ${({ theme }) => theme.zIndices.footer};
`;

const MiniFooterWrapper = styled(BaseFooter)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 6rem;
`;

const MainFooter = styled(BaseFooter)`
  position: relative;

  ${({ theme }) => theme.mediaQueries.md} {
    height: 17rem;
  }
`;

export default Footer;
