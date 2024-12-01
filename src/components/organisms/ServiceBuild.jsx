import React from 'react';
import styled from '@emotion/styled';
import button from 'atoms/Button';

const MainWrapper = styled.div`
  min-height: 60vh;
  max-width: 100vw;

  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.fuchsia},
    ${({ theme }) => theme.colors.lightBlue}
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
  padding-bottom: clamp(0.5rem, 8vw, 3rem);
  padding-right: 2rem;
`;

const SubHeader = styled.h2`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: clamp(0.75rem, 4vw, 2rem);
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

const ButtonArea = styled.div``;
const Button = styled(button)``;

const ServiceBuild = () => {
  return (
    <>
      <MainWrapper>
        <ContentWrapper>
          <HeaderWrapper>
            <Header>READY TO BUILD?</Header>
          </HeaderWrapper>
          <SubHeader>
            From websites and apps, to custom solutions, were here to bring your
            ideas to life. Lets create something extraordinary together.
          </SubHeader>
          <ButtonArea>
            <Button
              type="call to action"
              icon="FaArrowRight"
              variant="outline"
              size="medium"
            >
              Contact Us
            </Button>
          </ButtonArea>
        </ContentWrapper>
      </MainWrapper>
    </>
  );
};

export default ServiceBuild;
