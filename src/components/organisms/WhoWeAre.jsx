import styled from '@emotion/styled';
import WhoCard from 'molecules/WhoCard';
import config from 'data/about';
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
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`;

const ServicesSection = () => {
  const { cards } = config.who;
  return (
    <Container>
      <TitleSubtitle
        title={config.who.title}
        subtitle={config.who.subtitle}
        titleColor="lightBlue"
      />
      <CardArea>
        {cards.map((card, index) => (
          <WhoCard
            key={index}
            url={card.url}
            label={card.label}
            heading={card.heading}
            position={card.position}
            description={card.description}
          />
        ))}
      </CardArea>
    </Container>
  );
};
export default ServicesSection;
