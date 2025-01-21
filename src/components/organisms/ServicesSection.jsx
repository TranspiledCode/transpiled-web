import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Card from 'molecules/Card';
import Button from 'atoms/Button';
import content from 'data/home';
import TitleSubtitle from '../molecules/TitleSubtitle';

const Container = styled.section`
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  gap: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 4rem;
  }
`;

const CardArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ButtonArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ServicesSection = () => {
  const {
    services: { title, subtitle, cards },
  } = content;

  return (
    <Container>
      <TitleSubtitle title={title} subtitle={subtitle} titleColor="lightBlue" />
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
        <Link to="/services">
          <Button
            type="call to action"
            icon="FaArrowRight"
            variant="ghost"
            size="medium"
          >
            Explore Services
          </Button>
        </Link>
      </ButtonArea>
    </Container>
  );
};
export default ServicesSection;
