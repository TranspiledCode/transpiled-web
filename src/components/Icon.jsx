import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';
import styled from '@emotion/styled';

const StyledLink = styled.a`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Icon = ({ iconName, size, iconType, onClick, ariaLabel, url }) => {
  let icon;
  switch (iconType) {
    case 'brand':
      icon =
        BrandIcons[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`];
      break;
    default:
      icon =
        SolidIcons[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`];
  }

  // Fallback to a default icon if icon is not found
  const defaultIcon = SolidIcons.faQuestionCircle;
  icon = icon || defaultIcon;

  // If url is provided, render an <a> tag
  if (url) {
    return (
      <StyledLink
        href={url}
        target='_blank'
        rel='noreferrer'
        aria-label={ariaLabel}
      >
        <FontAwesomeIcon
          icon={icon}
          size={size}
          onClick={onClick}
          aria-label={ariaLabel}
          role='img'
        />
      </StyledLink>
    );
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      onClick={onClick}
      aria-label={ariaLabel}
      role='img'
    />
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconType: PropTypes.oneOf(['solid', 'brand']),
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
  url: PropTypes.string,
};

Icon.defaultProps = {
  size: '1x',
  iconType: 'solid',
  onClick: () => {},
  ariaLabel: 'Icon',
  url: '',
};

export default Icon;

/* 

Usage:
  To use the Icon component, import it and include it in your JSX code with the following props:
    - iconName: a valid Font Awesome icon name (see https://fontawesome.com/icons?d=gallery&s=solid&m=free)
    - size: a valid Font Awesome icon size (see https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons)
    - iconType: 'solid' or 'brand' (see https://fontawesome.com/how-to-use/on-the-web/styling/icons-in-a-stylesheet)
    - onClick (optional): a function to be called when the icon is clicked
    - ariaLabel (optional): a string to be used as the icon's accessible label
    - url (optional): a URL to be used in an <a> tag if you want the icon to behave like a link
Example:
  <Icon iconName="github" size="3x" iconType="brand" ariaLabel="Github logo" url="https://github.com/"/>

*/
