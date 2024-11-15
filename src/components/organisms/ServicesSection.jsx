import styled from '@emotion/styled';
import Card from 'molecules/Card';
import Button from 'atoms/Button';
import config from 'data/home';

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
  const { cards } = config.services;
  return (
    <Container>
      <SectionInfo>
        <Title>{config.services.title}</Title>
        <Subtitle>{config.services.subtitle}</Subtitle>
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
