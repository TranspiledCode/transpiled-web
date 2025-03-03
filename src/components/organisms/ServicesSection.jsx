import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Card from 'molecules/Card';
import Button from 'atoms/Button';
import content from 'data/home';
import TitleSubtitle from 'molecules/TitleSubtitle';
import { ArrowRight } from 'lucide-react';
import RevealWrapper from 'molecules/RevealWrapper';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;

const CardArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;
  margin-top: 2rem;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;

const ButtonArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 2rem;
  }
`;

const Icon = styled(ArrowRight)`
  margin-left: 1rem;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: 2rem;
  }
`;

const ServicesSection = () => {
  const {
    services: { title, subtitle, cards },
  } = content;

  return (
    <Container id="services">
      <TitleSubtitle
        title={title}
        subtitle={subtitle}
        titleColor="lightBlue"
        stMaxWidth="70"
      />
      <RevealWrapper>
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
      </RevealWrapper>
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
