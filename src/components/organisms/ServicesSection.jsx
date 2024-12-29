import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Card from 'molecules/Card';
import Button from 'atoms/Button';
import content from 'data/home';

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
  font-size: clamp(4.8rem, 8vw, 6.4rem);
  line-height: 0.95em;
  letter-spacing: -0.04em;
`;
const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.01em;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(60rem, 100%, 70rem);
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
      <SectionInfo>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </SectionInfo>
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
