import styled from '@emotion/styled';
import content from 'data/about';
import RevealWrapper from 'molecules/RevealWrapper';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: ${({ theme }) => theme.layouts.sectionPadding};

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 3rem;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  color: ${({ theme }) => theme.colors.fuchsia};
  font-weight: 700;
  font-size: clamp(5rem, 8vw, 6.4rem);
  line-height: clamp(5rem, 8vw, 6.4rem);
`;

const SubTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.manrope};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 400;
  font-weight: 400;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 50%;
  margin-bottom: clamp(2rem, 8vw, 5rem);

  ${({ theme }) => theme.mediaQueries.md}
  gap: 1rem;
  max-width: 100rem;
`;

const TranspiledVision = () => {
  const { title, subtitle } = content.vision;
  return (
    <TitleWrapper>
      <RevealWrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </RevealWrapper>
    </TitleWrapper>
  );
};

export default TranspiledVision;
