import styled from '@emotion/styled';
import content from 'data/about';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';

const ContentWrapper = styled.div`
  min-height: 60vh;
  max-width: 100vw;
  padding: ${({ theme }) => theme.layouts.sectionPadding};

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

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 3rem;
  }
`;

const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: clamp(4.8rem, 10vw, 9.6rem);
  line-height: clamp(5rem, 8vw, 6.4rem);
`;

const Subsubtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: left;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 90%;
  margin-bottom: clamp(2rem, 8vw, 8rem);

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 1rem;
    max-width: 90rem;
  }
`;

const StyledButton = styled(Button)``;
const AboutUs = () => {
  const { title, subtitle, btnText, btnUrl } = content.cta;

  return (
    <ContentWrapper>
      <TitleWrapper>
        <StyledTitle>{title}</StyledTitle>
        <Subsubtitle>{subtitle}</Subsubtitle>
      </TitleWrapper>
      <Link to={btnUrl}>
        <StyledButton icon="FaArrowRight" variant="outline">
          {btnText}
        </StyledButton>
      </Link>
    </ContentWrapper>
  );
};

export default AboutUs;
