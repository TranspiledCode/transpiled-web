import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.section`
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  gap: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 4rem;
  }
`;
const SectionInfo = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
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

const QuoteArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`;
const QuoteBlock = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    gap: 2rem;
  }
`;
const QuoteBody = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  flex: 1;
`;
const QuoteName = styled.p`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 700;
  font-size: 1.6rem;
  text-align: right;
`;

const TestimonialsSection = () => {
  const quotes = [
    {
      body: '"Transpiled helped us develop an app that’s become integral to our customer experience. Their dedication to detail and performance shines through in every feature."',
      name: '— Jessica, Founder of FitLife',
    },
    {
      body: '"The team’s collaborative approach and technical expertise made our e-commerce platform a success. The site is smooth, fast, and brings our products to life."',
      name: '— Mark, CEO of FreshWave',
    },
    {
      body: '"I was impressed by the level of care and precision from Transpiled. They took the time to understand our goals and delivered beyond expectations."',
      name: '— Alex, CTO  at StyleHub',
    },
  ];

  return (
    <Container>
      <SectionInfo>
        <Title>TESTIMONIALS</Title>
        <Subtitle>What Our Clients Say About Working with Transpiled</Subtitle>
      </SectionInfo>
      <QuoteArea>
        {quotes.map((quote, index) => (
          <QuoteBlock key={index}>
            <QuoteBody>{quote.body}</QuoteBody>
            <QuoteName>{quote.name}</QuoteName>
          </QuoteBlock>
        ))}
      </QuoteArea>
    </Container>
  );
};
export default TestimonialsSection;

QuoteBlock.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
