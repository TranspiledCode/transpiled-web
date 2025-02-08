import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import WhyCard from 'molecules/WhyCard';
import Button from 'atoms/Button';
import content from 'data/home';
import { ArrowRight } from 'lucide-react';

const SectionContainer = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  background-image: url('https://storage.googleapis.com/transpiled-web/images/whybackground/m.webp');
  background-size: cover;
  background-position: center;
  ${({ theme }) => theme.mixins.flexColCenter};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.black};
    opacity: 0.8;
    z-index: -1;
  }
`;

const SectionContent = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  ${({ theme }) => theme.mixins.flexColCenter};
  gap: 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    gap: 4rem;
  }
`;

const SectionInfo = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.green};
  ${({ theme }) => theme.mixins.textH2};
`;
const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  ${({ theme }) => theme.mixins.textBody};
`;

const CardGridWrapper = styled.div`
  width: 100%;
  max-width: 90vw;
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(1, 1fr);
`;

const CardArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: grid;
  gap: 4rem;
  grid-template-rows: 1fr;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 60vw;
  }
`;

const ButtonArea = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Icon = styled(ArrowRight)`
  margin-left: 2rem;
`;

const WhySection = () => {
  const {
    why: { title, subtitle, cards },
  } = content;

  return (
    <SectionContainer>
      <SectionContent>
        <SectionInfo>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </SectionInfo>
        <CardGridWrapper>
          <CardArea>
            {cards.map((card, index) => (
              <WhyCard
                key={index}
                label={card.label}
                heading={card.heading}
                description={card.description}
              />
            ))}
          </CardArea>
        </CardGridWrapper>
        <ButtonArea>
          <Link to="/about">
            <Button type="call to action" variant="outline" size="medium">
              Learn Why <Icon />
            </Button>
          </Link>
        </ButtonArea>
      </SectionContent>
    </SectionContainer>
  );
};

export default WhySection;
