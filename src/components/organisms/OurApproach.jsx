import styled from '@emotion/styled';
import ApproachCard from 'molecules/ApproachCard';
import config from 'data/home';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 4rem;
  z-index: 1;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 4rem;
    justify-content: center;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
    z-index: -1;
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
  color: ${({ theme }) => theme.colors.darkGray};
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
  width: 90vw;
`;

const CardArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: grid;
  gap: 4rem;
  justify-items: left;

  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 60vw;
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
  }
`;

const OurApproach = () => {
  const { cards } = config.approach;

  return (
    <Container>
      <SectionInfo>
        <Title>{config.approach.title}</Title>
        <Subtitle>{config.approach.subtitle}</Subtitle>
      </SectionInfo>
      <CardGridWrapper>
        <CardArea>
          {cards.map((card, index) => (
            <ApproachCard
              key={index}
              label={card.label}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </CardArea>
      </CardGridWrapper>
    </Container>
  );
};

export default OurApproach;
