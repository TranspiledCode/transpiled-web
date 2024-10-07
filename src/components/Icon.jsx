import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

/**
 * @function Icon
 * @description Renders a font awesome icon with a custom size and type, including ARIA attributes for accessibility.
 * @param {string} iconName - The name of the icon to render. (see https://fontawesome.com/search?s=solid&f=classic&o=r)
 * @param {string} [size=1x] - The size of the icon.
 * @param {string} [iconType=solid] - The type of icon, one of 'solid', 'brand', or 'image'.
 * @param {function} [onClick] - An optional click handler.
 * @param {string} [url] - Optional url of a custom icon image.
 * @param {string} [label] - ARIA label for accessibility.
 * @param {string} [role] - ARIA role attribute.
 * @returns {ReactElement} A React element representing the icon.
 */
const Icon = ({
  iconName,
  size = '1x',
  iconType = 'solid',
  onClick,
  url,
  label,
  role,
}) => {
  const [icon, setIcon] = useState(faQuestionCircle);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        if (iconType === 'brand') {
          const {
            [`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`]:
              loadedIcon,
          } = await import('@fortawesome/free-brands-svg-icons');
          setIcon(loadedIcon || faQuestionCircle);
        } else {
          const {
            [`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`]:
              loadedIcon,
          } = await import('@fortawesome/free-solid-svg-icons');
          setIcon(loadedIcon || faQuestionCircle);
        }
      } catch {
        setIcon(faQuestionCircle);
      }
    };

    loadIcon();
  }, [iconName, iconType]);

  if (iconType === 'image') {
    return (
      <StyledImage
        src={url}
        aria-label={label || iconName}
        role={role || 'img'}
      />
    );
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      onClick={onClick}
      aria-label={label || iconName}
      role={role || 'img'}
      tabIndex={onClick ? 0 : undefined}
    />
  );
};

export default React.memo(Icon);
