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
  const [imgSrc, setImgSrc] = useState(image || DEFAULT_AVATAR_URL);
  const [triedDefault, setTriedDefault] = useState(!image);

  const getInitial = (fullName) => (fullName ? fullName[0].toUpperCase() : '');

  const handleError = () => {
    if (!triedDefault) {
      setTriedDefault(true);
      setImgSrc(DEFAULT_AVATAR_URL);
    } else {
      setImgSrc(null);
    }
  };

  if (!imgSrc) {
    return (
      <AvatarContainer>
        <AvatarFallback>{getInitial(name)}</AvatarFallback>
      </AvatarContainer>
    );
  }

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
