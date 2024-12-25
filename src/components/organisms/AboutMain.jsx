import React from 'react';
import styled from '@emotion/styled';

const AboutUsWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.lightBlue}
  );
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 20rem;
  padding-left: 4rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 3rem;
  }
`;

const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: clamp(4.8rem, 10vw, 9.6rem);
  line-height: clamp(4.8rem, 10vw, 8.6rem);
`;

const Subsubtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: clamp(1.8rem, 4vw, 3.6rem);
  line-height: clamp(1.8rem, 4vw, 3.6rem);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 80%;
  margin-bottom: clamp(2rem, 8vw, 8rem);

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 1rem;
    max-width: 60rem;
  }
`;

const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  max-width: 25rem;
`;

const AboutMain = () => {
  return (
    <AboutUsWrapper>
      <TitleWrapper>
        <StyledTitle>WERE NOT JUST DEVELOPERS </StyledTitle>
        <Subsubtitle>
          Our mission is to drive business growth through high-quality,
          cutting-edge digital products built for today and the future.
        </Subsubtitle>
        <StyledParagraph>LEARN MORE ABOUT WHO WE ARE</StyledParagraph>
      </TitleWrapper>
    </AboutUsWrapper>
  );
};

export default AboutMain;
