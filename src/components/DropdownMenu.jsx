import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import {
  Menu,
  MenuProvider,
  MenuButton,
  MenuItem,
  MenuSeparator,
} from '@ariakit/react';
import { useTheme } from '../styles/ThemeProvider';

const StyledMenu = styled(Menu)`
  background: ${(props) => props.theme.background};
  width: 200px;
  border-radius: 5px;
  box-shadow: 0 2px 4px ${(props) => props.theme.shadowColor};
  margin-top: 15px;
  padding: 5px;
`;

const StyledMenuButton = styled(MenuButton)`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 16px;
  color: ${(props) => props.theme.text};
  font-size: 16px;
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 16px;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  border-radius: 5px;
  margin: 5px;
  &:hover {
    text-decoration-line: underline;
    text-decoration-color: ${(props) => props.theme.accentColor};
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
  }
`;

const DropDownMenu = ({ menuItems }) => {
  const { theme } = useTheme();

  return (
    <>
      <MenuProvider>
        <StyledMenuButton theme={theme}>
          <FontAwesomeIcon icon={faBars} />
        </StyledMenuButton>
        <StyledMenu theme={theme}>
          {menuItems.map((item, index) =>
            item.separator ? (
              <MenuSeparator key={index} />
            ) : (
              <StyledMenuItem key={index} href={item.href} theme={theme}>
                {item.label}
              </StyledMenuItem>
            )
          )}
        </StyledMenu>
      </MenuProvider>
    </>
  );
};

export default DropDownMenu;
