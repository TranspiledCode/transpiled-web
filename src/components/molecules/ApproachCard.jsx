//create why card (Basic) - Pass data into About Section
//300 width (refer to figma)
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
`;
const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
`;
const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.lightGray};
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
