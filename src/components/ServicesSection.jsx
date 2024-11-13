import styled from '@emotion/styled';
import Card from './Card';
import config from '../config/home';

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(3, 1fr);
    padding: 6rem;
  }
`;

const ServicesSection = () => {
  const { cards } = config.services;
  return (
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
  );
};
export default ServicesSection;
