import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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
  height: 100%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

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
  padding-top: 66.67%; /* 3:2 aspect ratio */
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition: transform 0.5s ease;

  ${Container}:hover & {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  flex-grow: 1;
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

const Card = ({ url, label, heading, description }) => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={url} alt={label} aria-label={label} loading="lazy" />
      </ImageWrapper>
      <TextContainer>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
