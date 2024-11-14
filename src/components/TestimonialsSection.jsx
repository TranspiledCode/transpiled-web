import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 4rem;
    padding: 6rem;
  }
`;
const SectionInfo = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.fuchsia};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(5rem, 8vw, 6.4rem);
  line-height: clamp(5rem, 8vw, 6.4rem);
  letter-spacing: -2px;
`;
const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(60rem, 100%, 70rem);
    text-align: left;
  }
`;

const TestimonialsSection = () => {
  return (
    <Container>
      <SectionInfo>
        <Title>TESTIMONIALS</Title>
        <Subtitle>What Our Clients Say About Working with Transpiled</Subtitle>
      </SectionInfo>
    </Container>
  );
};
export default TestimonialsSection;
