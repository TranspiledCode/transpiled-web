//create why card (Basic) - Pass data into WhySection
//300 width (refer to figma)
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: auto;
`;

const Heading = styled.div`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.4px;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.6rem;
  text-align: justify;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.4rem 2rem 2rem;
`;

const WhyCard = ({ heading, description }) => {
  return (
    <Container>
      <TextContainer>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  );
};

export default WhyCard;

WhyCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
