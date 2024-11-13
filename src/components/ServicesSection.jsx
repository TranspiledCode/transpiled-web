import styled from '@emotion/styled';
import Card from './Card';
import config from '../config/home';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  max-width: 120rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    padding: 6rem;
  }
`;

const ServicesSection = () => {
  const { cards } = config.services;
  return (
    <Container>
      <Section>
        {cards.map((card, index) => (
          <Card
            key={index}
            url={card.url}
            label={card.label}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </Section>
    </Container>
  );
};
export default ServicesSection;
