import React from 'react';

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavMenu = styled.nav`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    align-items: center;

    a {
      transition: color 0.3s;
      &:hover {
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;

const NavLinks = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.manrope};
  font-weight: 400;
  font-size: clamp(2rem, 2vw, 2.4rem);
  letter-spacing: -0.015em;
  display: flex;
  gap: 2rem;
`;

const NavBar = ({ links }) => {
  return (
    <NavMenu>
      <NavLinks>
        {links.map((link) => (
          <Link key={link.url} to={link.url}>
            {link.label}
          </Link>
        ))}
      </NavLinks>
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
