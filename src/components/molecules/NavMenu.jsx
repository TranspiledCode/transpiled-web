import React, { useContext, useState, useEffect } from 'react';
import AuthContext from 'context/AuthContext';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileDropdown from 'organisms/ProfileDropdown';

const NavMenu = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 400;
      transition: color 0.3s;
      padding: 0 1rem;

      &:hover {
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavBar = ({ links }) => {
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking the currentUser state
    if (currentUser !== undefined) {
      setIsLoading(false);
    }
  }, [currentUser]);

  // Show nothing until loading is complete
  if (isLoading) return null;

  return (
    <NavMenu>
      <NavLinks>
        {links.map((link) => (
          <Link key={link.url} to={link.url}>
            {link.label}
          </Link>
        ))}
      </NavLinks>
      {currentUser ? <ProfileDropdown /> : <Link to="/login">Login</Link>}
    </NavMenu>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default NavBar;
