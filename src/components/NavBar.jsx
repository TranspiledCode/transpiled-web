// src/components/NavBar.jsx
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    a {
      font-size: 1.4rem;
      margin: 0.5rem 0;
    }
  }
`;

const NavBar = ({ links }) => {
  return (
    <NavMenu>
      {links.map((link) => (
        <Link key={link.url} to={link.url}>
          {link.label}
        </Link>
      ))}
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
