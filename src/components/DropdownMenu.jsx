import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {
  Menu,
  MenuProvider,
  MenuButton,
  MenuItem,
  MenuSeparator,
} from '@ariakit/react';

const StyledMenu = styled(Menu)`
  background: ${({ theme }) => theme.background};
  width: 200px;
  border-radius: 5px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.shadowColor};
  margin-top: 15px;
  padding: 5px;
`;

const StyledMenuButton = styled(MenuButton)`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 16px;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 16px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border-radius: 5px;
  margin: 5px;
  &:hover {
    text-decoration-line: underline;
    text-decoration-color: ${({ theme }) => theme.accent};
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
  }
`;

const DropDownMenu = ({ menuItems }) => (
  <MenuProvider>
    <StyledMenuButton>
      <FontAwesomeIcon icon={faBars} />
    </StyledMenuButton>
    <StyledMenu>
      {menuItems.map((item) =>
        item.separator ? (
          <MenuSeparator key={item.id} />
        ) : (
          <StyledMenuItem key={item.id} href={item.link}>
            {item.label}
          </StyledMenuItem>
        )
      )}
    </StyledMenu>
  </MenuProvider>
);

DropDownMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      label: PropTypes.string,
      separator: PropTypes.bool,
    })
  ).isRequired,
};

export default DropDownMenu;
