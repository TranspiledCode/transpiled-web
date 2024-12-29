import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import AuthContext from 'context/AuthContext';

const StyledLoginLink = styled.div`
  margin-left: 2rem;
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(2rem, 2vw, 2.4rem);
  letter-spacing: -0.015em;

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const AuthLink = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return null;
  }

  return (
    <StyledLoginLink>
      <Link to="/login">Login</Link>
    </StyledLoginLink>
  );
};

export default AuthLink;
