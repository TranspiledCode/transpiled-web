import React, { useContext } from 'react';
import AuthContext from 'context/AuthContext';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavBar = ({ links }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <NavMenu>
      <NavLinks>
        {links.map((link) => (
          <Link key={link.url} to={link.url}>
            {link.label}
          </Link>
        ))}
      </NavLinks>
      {!currentUser && <Link to="/login">Login</Link>}
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
