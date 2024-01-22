import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin-right: 20px;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration-line: underline;
      text-decoration-color: ${(props) => props.theme.accentColor};
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
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
