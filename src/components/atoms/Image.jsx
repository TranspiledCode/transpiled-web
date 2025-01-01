import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledImage = styled.img`
  position: ${({ position }) => position};
  width: 100%;
  height: 100%;
  object-fit: ${({ objFit }) => objFit};
  z-index: -2;
`;

const Image = ({
  url,
  label = 'image',
  objFit = 'cover',
  position = 'static',
}) => {
  return (
    <StyledImage
      src={url}
      alt={label}
      aria-label={label}
      loading="lazy"
      objFit={objFit}
      position={position}
    />
  );
};
export default Image;
Image.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  objFit: PropTypes.oneOf(['cover', 'contain']),
  position: PropTypes.oneOf(['relative', 'absolute', 'static']),
};
