// import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Button from 'atoms/Button';
import content from 'data/home';
import TitleSubtitle from 'molecules/TitleSubtitle';
import RevealWrapper from 'molecules/RevealWrapper';
import ServiceCardGrid from 'molecules/ServiceCardGrid';
import useIsMobile from 'hooks/useIsMobile';
import { ArrowRight } from 'lucide-react';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.layouts.sectionPadding};
  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.layouts.maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 2.5rem;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(ArrowRight)`
  margin-left: 0.75rem;
  transition: transform 0.3s ease;

  ${StyledButton}:hover & {
    transform: translateX(4px);
  }
`;

const ServicesSection = () => {
  const isMobile = useIsMobile(640);
  const {
    services: { title, subtitle, cards },
  } = content;

  // Filter cards for mobile
  const displayedCards = isMobile ? cards.slice(0, 3) : cards;
  const shouldShowViewAll = isMobile && cards.length > 3;
  const buttonText = shouldShowViewAll
    ? 'View All Services'
    : 'Explore All Services';

  return (
    <Container id="services">
      <ContentWrapper>
        <TitleSubtitle
          title={title}
          subtitle={subtitle}
          titleColor="lightBlue"
          stMaxWidth="70"
          alignment="center"
        />
        <RevealWrapper>
          <ServiceCardGrid cards={displayedCards} />
        </RevealWrapper>

        <ButtonArea>
          <Link to="/services" aria-label="Learn more about our services">
            <StyledButton variant="ghost" size="medium">
              {buttonText} <Icon size={20} />
            </StyledButton>
          </Link>
        </ButtonArea>
      </ContentWrapper>
    </Container>
  );
};

export default ServicesSection;
