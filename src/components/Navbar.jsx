import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 10px;
    display: flex;
    align-items: center;
  }

  li {
    margin-right: 30px;
    font-size: 2rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};

    &:hover {
      text-decoration-line: underline;
      text-decoration-color: ${({ theme }) => theme.accent};
      text-decoration-thickness: 3px;
      text-underline-offset: 5px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ navLinks }) => (
  <Navigation>
    <ul>
      {navLinks.map((item) => (
        <li key={item.id}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  </Navigation>
);

Navbar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
