import styled from '@emotion/styled';
import Card from './Card';
// import Button from './Button';
import config from '../config/home';

const Container = Styled.div`
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
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(5rem, 8vw, 6.4rem);
  line-height: clamp(5rem, 8vw, 6.4rem);
  letter-spacing: -2px;
`;

const SubTitle = styled.p`
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

const CardArea = styled.h1`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`;

const WhySection = () => {
  const { cards } = config.Why;
  return (
    <Container>
      <SectionInfo>
        <Title>{config.Why.title}</Title>
        <Subtitle>{config.Why.subtitle}</Subtitle>
      </SectionInfo>
      <CardArea>
        {cards.map((card, index) => (
          <Card
            key={index}
            label={card.label}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </CardArea>
    </Container>
  );
};

export default WhySection;
