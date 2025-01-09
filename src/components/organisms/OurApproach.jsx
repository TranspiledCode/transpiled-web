import styled from '@emotion/styled';
import ApproachCard from 'molecules/ApproachCard';
import config from 'data/about';
import TitleSubtitle from '../molecules/TitleSubtitle';

const Container = styled.section`
  ${({ theme }) => theme.mixins.flexColCenter};
  gap: 2rem;
  padding: ${({ theme }) => theme.layouts.sectionPadding};

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 4rem;
    justify-content: center;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 4vw, 8rem);
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
      <Content>
        <TitleSubtitle
          title={config.approach.title}
          subtitle={config.approach.subtitle}
          titleColor="green"
        />
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
      </Content>
    </Container>
  );
};

export default OurApproach;
