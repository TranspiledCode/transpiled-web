import styled from '@emotion/styled';
import Card from './Card';
import Button from './Button';
import config from '../config/home';

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

const CardArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
`;

const ButtonArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ServicesSection = () => {
  const { cards } = config.services;
  return (
    <Container>
      <CardArea>
        {cards.map((card, index) => (
          <Card
            key={index}
            url={card.url}
            label={card.label}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </CardArea>
      <ButtonArea>
        <Button
          type="call to action"
          icon="FaArrowRight"
          variant="ghost"
          size="medium"
        >
          Explore Services
        </Button>
      </ButtonArea>
    </Container>
  );
};
export default ServicesSection;
