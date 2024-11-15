import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaInfoCircle } from 'react-icons/fa';
import styled from '@emotion/styled';

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

/**
 * Icon component that lazy loads react-icons/fa icons.
 * Inherits color from parent component and maintains alignment.
 *
 * @component
 * @param {string} name - Icon name from react-icons/fa (e.g., 'FaBars', 'FaTimes')
 * @param {number} size - Icon size in rem units
 * @param {function} onClick - Optional onClick handler
 *
 * @example
 * // Mobile menu toggle
 * <Icon name={menuOpen ? 'FaTimes' : 'FaBars'} size={1.8} />
 *
 * @example
 * // Navigation icon
 * <Icon name="FaHome" size={1.2}  onClick={() => console.log('Home clicked')} />
 */
const Icon = ({ name, size = 1.5, onClick }) => {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const { [name]: LoadedIcon } = await import('react-icons/fa');
        setIconComponent(() => LoadedIcon || FaInfoCircle);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn(`Failed to load icon: ${name}`, error);
        setIconComponent(() => FaInfoCircle);
      }
    };

    loadIcon();
  }, [name]);

  const RenderedIcon = IconComponent || FaInfoCircle;

  return (
    <IconWrapper>
      <RenderedIcon style={{ fontSize: `${size}rem` }} onClick={onClick} />
    </IconWrapper>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func,
};

export default Icon;
