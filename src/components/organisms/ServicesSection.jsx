import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Card from 'molecules/Card';
import Button from 'atoms/Button';
import content from 'data/home';
import TitleSubtitle from 'molecules/TitleSubtitle';
import { ArrowRight } from 'lucide-react';
import RevealWrapper from 'molecules/RevealWrapper';

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

const CardArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
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
  const [isMobile, setIsMobile] = useState(false);
  const {
    services: { title, subtitle, cards },
  } = content;

  // Check viewport size on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    checkIfMobile();

    // Add listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Filter cards for mobile
  const displayedCards = isMobile ? cards.slice(0, 3) : cards;

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
          <CardArea>
            {displayedCards.map((card, index) => (
              <Card
                key={index}
                url={card.url}
                label={card.label}
                heading={card.heading}
                description={card.description}
              />
            ))}
          </CardArea>
        </RevealWrapper>

        <ButtonArea>
          <Link to="/services" aria-label="Learn more about our services">
            <StyledButton variant="ghost" size="medium">
              {isMobile && cards.length > 3
                ? 'View All Services'
                : 'Explore All Services'}{' '}
              <Icon size={20} />
            </StyledButton>
          </Link>
        </ButtonArea>
      </ContentWrapper>
    </Container>
  );
};

export default ServicesSection;
