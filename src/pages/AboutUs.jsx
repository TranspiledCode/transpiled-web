import React from 'react';
import styled from '@emotion/styled';
// import AboutCard from 'molecules/AboutCard';

const AboutUsWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.lightBlue}
  );
`;

const StyledHeader = styled.h1``;

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <StyledHeader>About Us</StyledHeader>
    </AboutUsWrapper>
  );
};

export default AboutUs;
