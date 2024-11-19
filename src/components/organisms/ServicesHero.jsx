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
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: clamp(4.8rem, 10vw, 9.6rem);
  line-height: 1em;
  letter-spacing: -0.05em;
`;
const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.02em;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(60rem, 100%, 70rem);
    text-align: left;
  }
`;
const Caption = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  max-width: 25rem;
  line-height: 1.4em;
  letter-spacing: 0.02em;
`;

const ServicesHero = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <Title>TODAYS SOLUTIONS FUTURE PROOFED</Title>
        <Subtitle>
          Whether you need a dynamic website, a mobile app, or a custom-built
          system, Transpiled delivers exceptional results.
        </Subtitle>
        <Caption>
          explore our services in depth or schedule a consultation below.
        </Caption>
      </SectionContent>
    </SectionContainer>
  );
};
export default ServicesHero;
