import React from 'react';
import styled from '@emotion/styled';

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

const OurApproach = () => {
  return (
    <TitleWrapper>
      <Title>Our Approach</Title>
      <SubTitle>
        Every project begins with a deep understanding of your business and
        goals. We don’t just build websites—we build experiences.
      </SubTitle>
    </TitleWrapper>
  );
};

export default OurApproach;
