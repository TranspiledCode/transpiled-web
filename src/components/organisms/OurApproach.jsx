import React from 'react';
import styled from '@emotion/styled';
import config from 'data/home';

const PageWrapper = styled.div``;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 4rem;
  padding-left: 4rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 3rem;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.green};
  font-weight: 700;
  font-size: clamp(4.8rem, 10vw, 9.6rem);
  line-height: clamp(4.8rem, 10vw, 8.6rem);
`;

const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 400;
  font-size: clamp(1.8rem, 4vw, 3.6rem);
  line-height: clamp(1.8rem, 4vw, 3.6rem);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 80%;
  margin-bottom: clamp(2rem, 8vw, 8rem);

  ${({ theme }) => theme.mediaQueries.md}
  gap: 1rem;
  max-width: 95rem;
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
  const { cards } = config.why;
  return (
    <PageWrapper>
      <TitleWrapper>
        <Title>Our Approach</Title>
        <SubTitle>
          Every project begins with a deep understanding of your business and
          goals. We don’t just build websites—we build experiences.
        </SubTitle>
      </TitleWrapper>
      <CardGridWrapper>
        <CardArea>
          {cards.map((card, index) => (
            <OurApproach key={index} label={card.label} />
          ))}
        </CardArea>
      </CardGridWrapper>
    </PageWrapper>
  );
};

export default OurApproach;
