//create why card (Basic) - Pass data into WhySection
//300 width (refer to figma)
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  ${({ theme }) => theme.mediaQueries.sm} {
    width: clamp(0rem, 100%, 30rem);
  }
`;
const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.4em;
  letter-spacing: -0.01em;
`;
const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.6rem;
  text-align: justify;
  line-height: 1.4em;
  letter-spacing: -0.01em;
`;

const WhyCard = ({ heading, description }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
    </Container>
  );
};

export default WhyCard;

WhyCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
