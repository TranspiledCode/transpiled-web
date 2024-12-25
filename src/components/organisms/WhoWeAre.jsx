import React from 'react';
import styled from '@emotion/styled';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-top: 4rem;
  padding-left: 6rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 3rem;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.lightBlue};
  font-weight: 700;
  font-size: clamp(5rem, 8vw, 6.4rem);
  line-height: clamp(5rem, 8vw, 6.4rem);
`;

const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 80%;
  margin-bottom: clamp(2rem, 8vw, 8rem);

  ${({ theme }) => theme.mediaQueries.md}
  gap: 1rem;
  max-width: 95rem;
`;

const WhoWeAre = () => {
  return (
    <TitleWrapper>
      <Title>Who We Are</Title>
      <SubTitle>
        Our team is made up of creative thinkers, technical experts, and problem
        solvers who thrive on challenges.
      </SubTitle>
    </TitleWrapper>
  );
};

export default WhoWeAre;
