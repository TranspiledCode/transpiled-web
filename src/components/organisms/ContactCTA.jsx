import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from '../atoms/Button';

const SectionContainer = styled.section`
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.fuchsia},
    ${({ theme }) => theme.colors.darkBlue}
  );
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;
const SectionContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  padding: 2vw 0;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(5rem, 8vw, 6.4rem);
  line-height: 0.95em;
  letter-spacing: -0.04em;
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(2rem, 4vw, 4rem);
`;

const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.015em;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(60rem, 100%, 90rem);
    text-align: left;
  }
`;

const ContactCTA = () => {
  // MOVE OUT TO CONFIG LATER //
  const title = 'READY TO BUILD?';
  const subtitle =
    'From websites and apps to custom solutions, we’re here to bring your ideas to life. Let’s create something extraordinary together.';
  const buttonText = 'Contact Us';
  // MOVE OUT TO CONFIG LATER //

  return (
    <SectionContainer>
      <SectionContent>
        <Title>{title}</Title>
        <SubtitleContainer>
          <Subtitle>{subtitle}</Subtitle>
          <Link to="/contact">
            <Button icon="FaArrowRight" variant="outline" size="medium">
              {buttonText}
            </Button>
          </Link>
        </SubtitleContainer>
      </SectionContent>
    </SectionContainer>
  );
};
export default ContactCTA;
