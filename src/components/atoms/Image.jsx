import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/**
 * Image component.
 * Use this to load images onto the site.
 * Lists of allowed settings for applicable fields are hinted.
 *
 * @component
 * @param {string} url - URL to link the image. Must be a web link. Required.
 * @param {string} label - Accessibility description for the image. Required.
 * @param {string} objFit - Object fit settings for the image. Not required, use only when needed.
 * @param {string} position - Positioning settings for the image container. Not required, use only when needed.
 * @param {string} zIndex - Z-index settings for the image container. Not required, use only when needed.
 */

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
