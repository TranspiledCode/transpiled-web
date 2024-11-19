import styled from '@emotion/styled';

const SectionContainer = styled.section`
  width: 100%;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.lightBlue},
    ${({ theme }) => theme.colors.green}
  );
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;

const SectionContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  display: flex;
  flex-direction: column;
  padding: 8vw 0;
`;
const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: clamp(4.8rem, 10vw, 9.6rem);
  line-height: 1em;
  letter-spacing: -0.04em;
  max-width: 90rem;
`;

const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
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
const Caption = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  max-width: 35rem;
  line-height: 1.4em;
  letter-spacing: 0.015em;

  ${({ theme }) => theme.mediaQueries.md} {
    width: clamp(30rem, 40vw, 40rem);
    max-width: 40rem;
  }
`;

const ServicesHero = () => {
  // MOVE OUT TO CONFIG LATER //
  const title = 'TODAYS SOLUTIONS FUTURE PROOFED';
  const subtitle =
    'Whether you need a dynamic website, a mobile app, or a custom-built system, Transpiled delivers exceptional results.';
  const caption =
    'explore our services in depth or schedule a consultation below.';
  // MOVE OUT TO CONFIG LATER //

  return (
    <SectionContainer>
      <SectionContent>
        <Title>{title}</Title>
        <SubtitleContainer>
          <Subtitle>{subtitle}</Subtitle>
          <Caption>{caption}</Caption>
        </SubtitleContainer>
      </SectionContent>
    </SectionContainer>
  );
};
export default ServicesHero;
