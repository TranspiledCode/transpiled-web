import styled from '@emotion/styled';
import WhyCard from 'molecules/WhyCard';
import Button from 'atoms/Button';
import config from 'data/home';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.black};
  background-image: url('https://images.pexels.com/photos/2514035/pexels-photo-2514035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 4rem;
    padding: 6rem;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: clamp(5rem, 8vw, 6.4rem);
  line-height: clamp(5rem, 8vw, 6.4rem);
  letter-spacing: -2px;
`;

const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: left;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: clamp(60rem, 100%, 70rem);
  }
`;

const SectionInfo = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardGridWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(1, 1fr);
  width: 50vw;
`;

const CardArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: grid;
  gap: 2rem;
  justify-items: left;

  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
  }
`;

const ButtonArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const WhySection = () => {
  const { cards } = config.why;

  return (
    <Container>
      <SectionInfo>
        <Title>{config.why.title}</Title>
        <Subtitle>{config.why.subtitle}</Subtitle>
      </SectionInfo>
      <CardGridWrapper>
        <CardArea>
          {cards.map((card, index) => (
            <WhyCard
              key={index}
              label={card.label}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </CardArea>
      </CardGridWrapper>
      <ButtonArea>
        <Button
          type="call to action"
          icon="FaArrowRight"
          variant="ghost"
          size="medium"
        >
          Learn More
        </Button>
      </ButtonArea>
    </Container>
  );
};

export default WhySection;
