import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Button from 'atoms/Button';
import RevealWrapper from 'molecules/RevealWrapper';

import content from 'data/about';

const AboutUsWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  padding: ${({ theme }) => theme.layouts.sectionPadding};

  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.lightBlue}
  );

  @media (min-height: 680px) {
    height: 80rem;
    min-height: 80rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 10rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 3rem;
  }
`;

const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: clamp(3.5rem, 10vw, 9.6rem);
  line-height: clamp(4.8rem, 10vw, 8.6rem);
  max-width: 100rem;
`;

const Subsubtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: clamp(2.5rem, 4vw, 4rem);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 80%;
  margin-bottom: clamp(2rem, 8vw, 4rem);

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 1rem;
    max-width: 90rem;
  }
`;

const StyledButton = styled(Button)`
  font-size: clamp(2rem, 4vw, 5rem);
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    width: auto;
  }
`;

const AboutMain = () => {
  const { title, subtitle, learnMore } = content.main;
  return (
    <AboutUsWrapper>
      <TitleWrapper>
        <StyledTitle>{title}</StyledTitle>
        <Subsubtitle>{subtitle}</Subsubtitle>
        <RevealWrapper>
          <Link to="#who" aria-label="Contact Us">
            <StyledButton icon="FaArrowDown" variant="outline" size="medium">
              {learnMore}
            </StyledButton>
          </Link>
        </RevealWrapper>
      </TitleWrapper>
    </AboutUsWrapper>
  );
};

export default AboutMain;
