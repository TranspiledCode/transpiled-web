import styled from '@emotion/styled';
import WhoCard from 'molecules/WhoCard';
import content from 'data/about';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;

const SectionInfo = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 4rem;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.2;
  letter-spacing: -1px;
  margin: 0 0 1rem 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 4rem;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 5rem;
    letter-spacing: -1.5px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 6.4rem;
    letter-spacing: -2px;
  }
`;

const Position = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: 1.6rem;
  margin: 0 0 1rem 0;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 1.8rem;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 2.4rem;
  }
`;

const Subtitle = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 1.8rem;
    width: 90%;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 2.4rem;
    width: 80%;
  }
`;

const CardArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 3rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;

const WhoWeAre = () => {
  const { cards, title, subtitle, position } = content.who;
  return (
    <Container>
      <SectionInfo>
        <Title>{title}</Title>
        <Position>{position}</Position>
        <Subtitle>{subtitle}</Subtitle>
      </SectionInfo>
      <CardArea>
        {cards.map((card, index) => {
          const { url, label, heading, position, description } = card;
          return (
            <WhoCard
              key={index}
              url={url}
              label={label}
              heading={heading}
              position={position}
              description={description}
            />
          );
        })}
      </CardArea>
    </Container>
  );
};
export default WhoWeAre;
