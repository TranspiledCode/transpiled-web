import { useContext, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { signOut } from 'firebase/auth';
import AuthContext from 'context/AuthContext';

import GlobalContext from 'context/GlobalContext';
import { auth } from '../../../firebase/config';
import Avatar from 'molecules/Avatar';

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
  background-color: #fff;
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

const UserName = styled.div`
  padding: 10px 15px;
  font-size: 18px;
  color: #333;
  font-weight: 400;
  border-bottom: 1px solid #e0e0e0;
`;

const AvatarWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

const ProfileDropdown = () => {
  const { profileMenuOpen, toggleProfileMenu, closeProfileMenu } =
    useContext(GlobalContext);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleOutsideClick = useCallback(
    (event) => {
      if (
        profileMenuOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        closeProfileMenu();
      }
    },
    [profileMenuOpen, closeProfileMenu],
  );

  useEffect(() => {
    if (profileMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [profileMenuOpen, handleOutsideClick]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (err) {
      console.error('Logout Error:', err);
    }
  };

  const handleProfileClick = () => {
    navigate('/profile');
    closeProfileMenu();
  };

  const menuItems = [
    { label: 'View Profile', onClick: handleProfileClick },
    { label: 'Settings', onClick: () => console.log('Settings') },
    { label: 'Logout', onClick: handleLogout },
  ];

  return (
    <ProfileContainer ref={containerRef}>
      <AvatarWrapper
        onClick={(e) => {
          e.stopPropagation();
          toggleProfileMenu();
        }}
      >
        <Avatar
          image={currentUser?.photoURL}
          name={currentUser?.displayName || ''}
        />
      </AvatarWrapper>

      {profileMenuOpen && (
        <DropdownMenu>
          <UserName>{currentUser?.displayName}</UserName>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                item.onClick();
                closeProfileMenu();
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </DropdownMenu>
      )}
    </ProfileContainer>
  );
};

export default ProfileDropdown;
