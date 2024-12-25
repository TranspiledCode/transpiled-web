import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  border-width: 4px;
  border-style: none;
  display: grid;
  grid-auto-rows: max-content;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGray};
  align-items: center;
  align-content: center;
  gap: 0.5rem;
  padding: 1.4rem 2rem 2rem;
`;
const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.4px;
`;

const Position = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.6rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.6rem;
  text-align: justify;
`;

const Card = ({ url, label, heading, position, description }) => {
  return (
    <Container>
      {/* Replace after Image compoent is built */}
      <Image src={url} alt={label} aria-label={label} loading="lazy" />
      <TextContainer>
        <Heading>{heading}</Heading>
        <Position>{position}</Position>
        <Description>{description}</Description>
      </TextContainer>
    </Container>
  );
};
export default Card;

Card.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
