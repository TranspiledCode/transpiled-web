import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Styled Components
const Container = styled.div`
  width: 100%;

  border-image: linear-gradient(
      ${({ theme }) => theme.colors.lightBlue},
      ${({ theme }) => theme.colors.green}
    )
    1;
  border-width: 4px;
  border-style: solid;
  display: grid;
  grid-template-rows: 1fr auto;
  background-color: white;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-rows: auto auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGray};
  align-items: center;
  gap: 0.5rem;
  padding: 1.4rem 2rem 2rem;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 1rem 1.5rem 1.5rem;
  }
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: clamp(1.8rem, 3vw, 2.5rem);
  letter-spacing: -0.4px;
  margin: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: clamp(1.4rem, 4vw, 2rem);
  }
`;

const Position = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  margin: 0;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: clamp(1.2rem, 4vw, 1.6rem);
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  text-align: center;
  margin: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: clamp(1rem, 3vw, 1.4rem);
  }
`;

// Card Component
const Card = ({ url, label, heading, position, description }) => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image src={url} alt={label} aria-label={label} loading="lazy" />
        </ImageContainer>
        <TextContainer>
          <Heading>{heading}</Heading>
          <Position>{position}</Position>
          <Description>{description}</Description>
        </TextContainer>
      </Container>
    </>
  );
};

// PropTypes
Card.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
