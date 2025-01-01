import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Image from '../atoms/Image';

const Container = styled.div`
  position: relative;
  height: clamp(30rem, 50vw, 60rem);
  width: 100%;
  ${({ theme }) => theme.mixins.flexColCenter};
`;
const TextContainer = styled.div`
  position: absolute;
  ${({ theme }) => theme.mixins.flexColCenter};
  gap: 1rem;
`;
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(2.4rem, 8vw, 4.8rem);
  line-height: 0.95em;
  letter-spacing: -0.04em;
`;
const SubtitleContainer = styled.div`
  max-width: 30rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.4em;
  letter-spacing: -0.01em;
  ${({ theme }) => theme.mixins.flexColCenter};
  gap: 0.4rem;
`;
const Category = styled.p`
  color: ${({ theme, catColor }) => theme.colors[catColor]};
`;
const Caption = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
`;

const Overlay = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.8;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const CoverImage = ({
  url,
  label,
  title,
  category,
  caption,
  catColor = 'lightBlue',
}) => {
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <SubtitleContainer>
          <Category catColor={catColor}>{category}</Category>
          <Caption>{caption}</Caption>
        </SubtitleContainer>
      </TextContainer>
      <Overlay></Overlay>
      <Image url={url} label={label} zIndex={-2} />
    </Container>
  );
};
CoverImage.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  catColor: PropTypes.oneOf([
    'darkBlue',
    'lightBlue',
    'green',
    'fuchsia',
    'orange',
  ]),
};
export default CoverImage;
