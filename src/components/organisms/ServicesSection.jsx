import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Card from 'molecules/Card';
import Button from 'atoms/Button';
import content from 'data/home';
import TitleSubtitle from 'molecules/TitleSubtitle';
import { ArrowRight } from 'lucide-react';

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

const Icon = styled(ArrowRight)`
  margin-left: 2rem;
`;

const ServicesSection = () => {
  const {
    services: { title, subtitle, cards },
  } = content;

  return (
    <Container>
      <TitleSubtitle
        title={title}
        subtitle={subtitle}
        titleColor="lightBlue"
        stMaxWidth="70"
      />
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
        <Link to="/services" aria-label="Learn more about our services">
          <Button type="call to action" variant="ghost" size="medium">
            Explore Services <Icon />
          </Button>
        </Link>
      </ButtonArea>
    </Container>
  );
};
export default ServicesSection;
