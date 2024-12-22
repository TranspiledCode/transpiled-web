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
  cursor: pointer;
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

const Avatar = ({ image = null, name = '' }) => {
  const [imageError, setImageError] = useState(false);

  const getInitial = (name) => {
    return name ? name[0] : '';
  };

  return (
    <AvatarContainer>
      {!imageError && image ? (
        <AvatarImage src={image} onError={() => setImageError(true)} />
      ) : (
        <AvatarFallback>{getInitial(name)}</AvatarFallback>
      )}
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Avatar;
