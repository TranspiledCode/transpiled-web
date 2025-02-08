//create why card (Basic) - Pass data into WhySection
//300 width (refer to figma)
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: clamp(0rem, 100%, 38rem);
  }
`;
const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.lightBlue};
  ${({ theme }) => theme.mixins.textH3};
`;
const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  ${({ theme }) => theme.mixins.textBodySm};
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
