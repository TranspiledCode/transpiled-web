import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 100%;
  min-height: 50rem;
  width: 100%;
  border-image: linear-gradient(
      ${({ theme }) => theme.colors.lightBlue},
      ${({ theme }) => theme.colors.green}
    )
    1;
  border-width: 4px;
  border-style: solid;
  display: grid;
  grid-template-rows: 1.5fr 1fr;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const TextContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Heading = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 2.4rem;
  letter-spacing: -0.4px;
`;
const Description = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: 1.6rem;
  text-align: justify;
`;

const Card = ({ CardImage, ImageLabel, CardHeading, CardDescription }) => {
  return (
    <Container>
      <Image src={CardImage} alt={ImageLabel} aria-label={ImageLabel}></Image>
      <TextContainer>
        <Heading>{CardHeading}</Heading>
        <Description>{CardDescription}</Description>
      </TextContainer>
    </Container>
  );
};
export default Card;

Card.propTypes = {
  CardImage: PropTypes.string.isRequired,
  ImageLabel: PropTypes.string.isRequired,
  CardHeading: PropTypes.string.isRequired,
  CardDescription: PropTypes.string.isRequired,
};
