import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AvatarFallback = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #9e9e9e;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
`;

const DEFAULT_AVATAR_URL =
  'https://storage.googleapis.com/transpiled-web/images/default-user-image.png';

function Avatar({ image, name = '' }) {
  // This state holds the *current* image source (which might change on error).
  const [imgSrc, setImgSrc] = useState(image || DEFAULT_AVATAR_URL);

  // Keep track if we have already tried the default image.
  const [triedDefault, setTriedDefault] = useState(!image);

  const getInitial = (fullName) => (fullName ? fullName[0].toUpperCase() : '');

  const handleError = () => {
    if (!triedDefault) {
      // We tried user-provided first; now let's try default.
      setTriedDefault(true);
      setImgSrc(DEFAULT_AVATAR_URL);
    } else {
      // We already tried default => fallback to initials.
      setImgSrc(null);
    }
  };

  // If imgSrc is null, it means both user and default failed ⇒ initials.
  if (!imgSrc) {
    return (
      <AvatarContainer>
        <AvatarFallback>{getInitial(name)}</AvatarFallback>
      </AvatarContainer>
    );
  }

  // Otherwise, attempt to load imgSrc.
  return (
    <AvatarContainer>
      <AvatarImage src={imgSrc} alt={name} onError={handleError} />
    </AvatarContainer>
  );
}

Avatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default Avatar;
