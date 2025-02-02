import { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { signOut } from 'firebase/auth';
import { useAuth } from 'context/AuthContext';
import { useContext } from 'react';
import GlobalContext from 'context/GlobalContext';
import { auth } from 'config/firebase';
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
  const {
    profileMenuOpen,
    toggleProfileMenu,
    closeProfileMenu,
    isEditable,
    toggleEditable,
  } = useContext(GlobalContext);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser, isAdmin } = useAuth();

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
      // eslint-disable-next-line no-console
      console.error('Logout Error:', err);
    }
  };

  const handleProfileClick = () => {
    navigate('/profile');
    closeProfileMenu();
  };

  // Base menu items that all users see
  const baseMenuItems = [
    { label: 'View Profile', onClick: handleProfileClick },
    // { label: 'Settings', onClick: () => console.log('Settings') },
    { label: 'Logout', onClick: handleLogout },
  ];

  // Add edit mode option only for admin users
  const menuItems = isAdmin
    ? [
        ...baseMenuItems,
        {
          label: isEditable ? 'Cancel Edit' : 'Edit Mode',
          onClick: () => {
            toggleEditable();
            closeProfileMenu();
          },
        },
      ]
    : baseMenuItems;

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
