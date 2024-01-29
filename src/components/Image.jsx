import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ImageComponent = ({ src, alt, className, onClick }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageSrc(src);
    setImageError(false);
  }, [src]);

  const defaultImage =
    'https://transpiled.s3.amazonaws.com/assets/img/default/m.webp';
  const ImageTag = (
    <ResponsiveImage
      src={imageError ? defaultImage : imageSrc}
      alt={alt}
      onError={() => setImageError(true)}
      className={className}
      role='presentation'
      aria-label={alt}
    />
  );

  return onClick ? (
    <button
      onClick={onClick}
      type='button'
      aria-label='View Selected Image'
      className={`image-button ${className}`}
      style={{ border: 'none', padding: 0, background: 'none' }}
    >
      {ImageTag}
    </button>
  ) : (
    ImageTag
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

ImageComponent.defaultProps = {
  className: '',
  onClick: null,
};

export default ImageComponent;
