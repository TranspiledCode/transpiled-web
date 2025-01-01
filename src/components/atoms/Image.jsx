import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: ${({ objFit }) => objFit};
  position: ${({ position }) => position};
  z-index: ${({ zIndex }) => zIndex};
`;

const Image = ({
  url,
  label = 'image',
  objFit = 'cover',
  position,
  zIndex,
}) => {
  return (
    <StyledImage
      src={url}
      alt={label}
      aria-label={label}
      loading="lazy"
      objFit={objFit}
      position={position}
      zIndex={zIndex}
    />
  );
};
export default Image;
Image.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  objFit: PropTypes.oneOf(['cover', 'contain']),
  position: PropTypes.oneOf([
    'relative',
    'absolute',
    'static',
    'absolute',
    'sticky',
  ]),
  zIndex: PropTypes.number,
};
