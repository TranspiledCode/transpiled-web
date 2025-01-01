import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const Image = ({ url = '', label = 'image' }) => {
  return (
    <StyledImage src={url} alt={label} aria-label={label} loading="lazy" />
  );
};
export default Image;
Image.propTypes = {
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
