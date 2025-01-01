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
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  ${({ theme }) => theme.mixins.flexColCenter};
  gap: 1rem;
`;
const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-size: clamp(2.4rem, 8vw, 4.8rem);
  line-height: 0.95em;
  letter-spacing: -0.04em;
`;
const SubtitleContainer = styled.div`
  ${({ theme }) => theme.mixins.flexColCenter};
`;
const Category = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 1.4em;
  letter-spacing: -0.01em;
`;
const Caption = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 1.4em;
  letter-spacing: -0.01em;
`;
const Overlay = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.8;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const CoverImage = ({ url, label, title, category, caption }) => {
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <SubtitleContainer>
          <Category>{category}</Category>
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
};
export default CoverImage;
