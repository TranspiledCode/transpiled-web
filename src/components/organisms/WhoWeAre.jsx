import styled from '@emotion/styled';
import WhoCard from 'molecules/WhoCard';
import config from 'data/about';

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
  align-items: flex-start;
  gap: 0.5rem;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(5rem, 8vw, 6.4rem);
  line-height: clamp(5rem, 8vw, 6.4rem);
  letter-spacing: -2px;
`;
const Position = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
`;

const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: left;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(60rem, 100%, 69rem);
    text-align: left;
  }
`;

const CardArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`;

const ServicesSection = () => {
  const { cards } = config.who;
  return (
    <Container>
      <SectionInfo>
        <Title>{config.who.title}</Title>
        <Position>{config.who.position}</Position>
        <Subtitle>{config.who.subtitle}</Subtitle>
      </SectionInfo>
      <CardArea>
        {cards.map((card, index) => (
          <WhoCard
            key={index}
            url={card.url}
            label={card.label}
            heading={card.heading}
            position={card.position}
            description={card.description}
          />
        ))}
      </CardArea>
    </Container>
  );
};
export default ServicesSection;
