import React, { useContext, useState, useEffect } from 'react';
import AuthContext from 'context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileDropdown from 'organisms/ProfileDropdown';

const NavMenu = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;

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

const NavBar = ({ links }) => {
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate checking the currentUser state
    if (currentUser !== undefined) {
      setIsLoading(false);
    }
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error('Logout Error:', err);
    }
  };

  const menuItems = [
    { label: 'View Profile', onClick: () => console.log('View Profile') },
    { label: 'Settings', onClick: () => console.log('Settings') },
    { label: 'Logout', onClick: handleLogout },
  ];
  // Show nothing until loading is complete
  if (isLoading) return null;

  return (
    <NavMenu>
      {links.map((link) => (
        <Link key={link.url} to={link.url}>
          {link.label}
        </Link>
      ))}
      {currentUser ? (
        <ProfileDropdown
          menuItems={menuItems}
          avatarImage={
            'https://storage.googleapis.com/transpiled-web/images/joshua.jpg'
          }
          avatarName={'Joshua'}
        />
      ) : (
        <Link to="/login">Login</Link>
      )}
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
