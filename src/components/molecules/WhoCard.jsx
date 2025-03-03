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
  border-width: 3px;
  border-style: solid;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    border-width: 4px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 aspect ratio */
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  transition: transform 0.5s ease;

  ${Container}:hover & {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  flex-grow: 1;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 2rem;
  }
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.8rem;
  line-height: 1.2;
  letter-spacing: -0.4px;
  margin: 0 0 0.8rem 0;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 2.2rem;
  }
`;

const Position = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.4rem;
  line-height: 1.5;
  text-align: center;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 1.6rem;
  }
`;

// Card Component
const Card = ({ url, label, heading, position, description }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={url} alt={label} aria-label={label} loading="lazy" />
      </ImageWrapper>
      <TextContainer>
        <Heading>{heading}</Heading>
        <Position>{position}</Position>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
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
