import React from 'react';
import styled from '@emotion/styled';
import Button from '../atoms/Button';

const PageWrapper = styled.div``;

const ContentWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.fuchsia},
    ${({ theme }) => theme.colors.darkBlue}
  );
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 4rem;
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

const StyledButton = styled(Button)`
  margin-left: 4rem;
`;
const AboutUs = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <StyledTitle>READY TO BUILD? </StyledTitle>
          <Subsubtitle>
            From websites and apps to custom solutions, we’re here to bring your
            ideas to life. Let’s create something extraordinary together.
          </Subsubtitle>

          <StyledButton icon="FaArrowRight" variant="outline" size="medium">
            CONTACT US
          </StyledButton>
        </TitleWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default AboutUs;
