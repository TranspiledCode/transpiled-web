import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../styles/ThemeProvider';

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
const Navbar = ({ navLinks }) => {
  const { theme } = useTheme();

  return (
    <Navigation theme={theme}>
      <ul>
        {navLinks.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </Navigation>
  );
};

export default Navbar;
