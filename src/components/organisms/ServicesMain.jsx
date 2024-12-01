import React from 'react';
import styled from '@emotion/styled';

const MainWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;

  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.lightBlue},
    ${({ theme }) => theme.colors.green}
  );
`;
const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 2rem;
  }
`;
const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: clamp(4.8rem, 10vw, 9.6rem);
  line-height: clamp(4.8rem, 10vw, 8.6rem);
  padding-bottom: clamp(1rem, 8vw, 6rem);
  padding-right: 2rem;
`;

const SubHeader = styled.h2`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: clamp(0.5rem, 4vw, 1.6rem);
  line-height: clamp(1.8rem, 4vw, 2.6rem);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 100%;
  margin-bottom: clamp(2rem, 8vw, 8rem);

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 1rem;
    max-width: 60rem;
  }
`;

const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 500px;
  font-size: 1.6rem;
  align-items: left;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 40vw;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-right: 65vw;
  }
`;
const ServicesMain = () => {
  return (
    <>
      <MainWrapper>
        <ContentWrapper>
          <HeaderWrapper>
            <Header>TODAYS SOLUTIONS FUTURE PROOFED</Header>
          </HeaderWrapper>
          <SubHeader>
            WHETHER YOU NEED A DYNAMIC WEBSITE, MOBILE APP, OR A CUSTOM-BUILT
            SYSTEM, TRANSPILED DELIVERS EXCEPTIONALLY DELIVERED RESULTS
          </SubHeader>
          <Paragraph>
            EXPLORE OUR SERVICES IN DEPTH OR SCHEDULE A CONSULTATION BELOW.
          </Paragraph>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
};

export default ServicesMain;
