import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useContext, useEffect, useRef } from 'react';
import Avatar from 'molecules/Avatar';
import GlobalContext from 'context/GlobalContext';

const ProfileContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  width: 200px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
`;

const MenuItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;

  &:hover {
    background-color: #f0f0f0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const AvatarWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

const ProfileDropdown = ({ avatarImage, avatarName, menuItems }) => {
  const { profileMenuOpen, toggleProfileMenu, closeProfileMenu } =
    useContext(GlobalContext);
  const containerRef = useRef(null);

  const handleDocumentClick = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      closeProfileMenu();
    }
  };

  useEffect(() => {
    if (profileMenuOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
    } else {
      document.removeEventListener('mousedown', handleDocumentClick);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [profileMenuOpen]);

  const toggleDropdown = () => toggleProfileMenu();

  return (
    <ProfileContainer ref={containerRef}>
      <AvatarWrapper onClick={toggleDropdown}>
        <Avatar image={avatarImage} name={avatarName} />
      </AvatarWrapper>
      {profileMenuOpen && (
        <DropdownMenu>
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={item.onClick}>
              {item.label}
            </MenuItem>
          ))}
        </DropdownMenu>
      )}
    </ProfileContainer>
  );
};

ProfileDropdown.propTypes = {
  avatarImage: PropTypes.string.isRequired,
  avatarName: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default ProfileDropdown;
