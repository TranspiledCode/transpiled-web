import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {
  Code,
  Palette,
  Monitor,
  Server,
  Database,
  ShoppingCart,
} from 'lucide-react';

const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  height: 100%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    /* Condensed horizontal layout for small screens */
    flex-direction: row;
    max-height: 120px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: column;
    max-height: none;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(
    135deg,
    ${({ colorStart, theme }) => theme.colors[colorStart || 'lightBlue']}90,
    ${({ colorEnd, theme }) => theme.colors[colorEnd || 'darkBlue']}90
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.sm} {
    /* Condensed layout for small screens */
    width: 80px;
    min-width: 80px;
    height: 100%;
    border-bottom: none;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
    height: 100px;
    border-right: none;
  }
`;

const IconContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.09);
  border-radius: 50%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  z-index: 2;

  ${Container}:hover & {
    transform: scale(1.1);
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    /* Smaller icon for condensed layout */
    padding: 8px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 12px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  flex-grow: 1;

  ${({ theme }) => theme.mediaQueries.sm} {
    /* Adjustments for condensed layout */
    padding: 1rem;
    gap: 0.5rem;
    overflow: hidden;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 1.5rem;
    gap: 0.75rem;
  }
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.mixins.textH3};
  margin: 0;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  ${({ theme }) => theme.mixins.textBodySm};
  margin: 0;
  line-height: 1.5;
`;

const MobileDescription = styled(Description)`
  display: none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

const DesktopDescription = styled(Description)`
  display: block;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
  }
`;

const getIconType = (heading, label) => {
  const text = (heading + ' ' + (label || '')).toLowerCase();

  if (text.includes('develop')) return 'web-development';
  if (text.includes('design')) return 'web-design';
  if (text.includes('app')) return 'app-solutions';
  if (text.includes('e-commerce') || text.includes('ecommerce'))
    return 'ecommerce';
  if (text.includes('host') || text.includes('maintenance')) return 'hosting';
  if (text.includes('domain')) return 'domain';
  return 'default';
};

const getIcon = (type) => {
  const iconProps = {
    size: 38,
    color: 'white',
    strokeWidth: 2,
  };

  switch (type) {
    case 'web-development':
      return <Code {...iconProps} />;
    case 'web-design':
      return <Palette {...iconProps} />;
    case 'app-solutions':
      return <Monitor {...iconProps} />;
    case 'ecommerce':
      return <ShoppingCart {...iconProps} />;
    case 'hosting':
      return <Server {...iconProps} />;
    case 'domain':
      return <Database {...iconProps} />;
    default:
      return <Code {...iconProps} />;
  }
};

const getGradient = (type) => {
  switch (type) {
    case 'web-development':
    case 'web-design':
    case 'domain':
      return { start: 'darkBlue', end: 'fuchsia' };
    case 'app-solutions':
    case 'ecommerce':
    case 'hosting':
      return { start: 'green', end: 'darkBlue' };
    default:
      return { start: 'lightBlue', end: 'darkBlue' };
  }
};

const Card = ({ label, heading, description, briefDescription, type }) => {
  // If type is not provided, try to infer it from heading and label
  const cardType = type || getIconType(heading, label);
  const { start, end } = getGradient(cardType);

  return (
    <Container>
      <IconWrapper colorStart={start} colorEnd={end}>
        <IconContainer>{getIcon(cardType)}</IconContainer>
      </IconWrapper>
      <TextContainer>
        <Heading>{heading}</Heading>
        <MobileDescription>{briefDescription || description}</MobileDescription>
        <DesktopDescription>{description}</DesktopDescription>
      </TextContainer>
    </Container>
  );
};

Card.propTypes = {
  _url: PropTypes.string,
  label: PropTypes.string,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  briefDescription: PropTypes.string,
  type: PropTypes.string,
};

export default Card;
