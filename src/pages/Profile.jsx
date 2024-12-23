import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  getAuth,
  onAuthStateChanged,
  updateEmail,
  updateProfile,
} from 'firebase/auth';
import { useToast } from 'context/ToastContext';
import ProfileField from 'organisms/ProfileField';

/** Styled Container for the entire page */
const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.darkBlue},
    ${({ theme }) => theme.colors.lightBlue}
  );
  ${({ theme }) => theme.mixins.flexColCenter};
  padding: ${({ theme }) => theme.layouts.sectionPadding};
`;

/** Styled Card for the content area */
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  padding: 2rem;
  width: 800px;
  max-width: 90%;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const ProfilePage = () => {
  const auth = getAuth();
  const { addToast } = useToast();

  const defaultProfileImage =
    'https://storage.googleapis.com/transpiled-web/images/default-user-image.png';

  // Master state for user info
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    photoURL: '',
  });

  // Local states for editing each field
  const [localDisplayName, setLocalDisplayName] = useState('');
  const [localEmail, setLocalEmail] = useState('');
  const [localPhotoURL, setLocalPhotoURL] = useState('');

  // Edit mode booleans
  const [isEditingDisplayName, setIsEditingDisplayName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhotoURL, setIsEditingPhotoURL] = useState(false);

  // Basic status for loading & success/failure messages
  const [status, setStatus] = useState({
    message: '',
    isSuccess: false,
    isLoading: false,
  });

  // Validate images
  const isValidImage = (url) => {
    return /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg)$/i.test(url);
  };

  // Fetch user data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData({
          displayName: user.displayName || '',
          email: user.email || '',
          photoURL: isValidImage(user.photoURL)
            ? user.photoURL
            : defaultProfileImage,
        });
      }
    });
    return () => unsubscribe();
  }, [auth]);

  /** HANDLERS for DisplayName */
  const handleEditDisplayName = () => {
    setLocalDisplayName(formData.displayName);
    setIsEditingDisplayName(true);
  };

  const handleSaveDisplayName = async () => {
    setStatus({ ...status, isLoading: true });
    try {
      const user = auth.currentUser;
      await updateProfile(user, { displayName: localDisplayName });
      setFormData((prev) => ({ ...prev, displayName: localDisplayName }));
      setIsEditingDisplayName(false);

      setStatus({
        message: 'Display name updated successfully',
        isSuccess: true,
        isLoading: false,
      });
      addToast('Display name updated successfully', 'success');
    } catch (error) {
      setStatus({
        message: error.message || 'Failed to update display name',
        isSuccess: false,
        isLoading: false,
      });
      addToast(error.message || 'Failed to update display name', 'danger');
    }
  };

  const handleCancelDisplayName = () => {
    setLocalDisplayName('');
    setIsEditingDisplayName(false);
  };

  /** HANDLERS for Email */
  const handleEditEmail = () => {
    setLocalEmail(formData.email);
    setIsEditingEmail(true);
  };

  const handleSaveEmail = async () => {
    setStatus({ ...status, isLoading: true });
    try {
      const user = auth.currentUser;
      await updateEmail(user, localEmail);
      setFormData((prev) => ({ ...prev, email: localEmail }));
      setIsEditingEmail(false);

      setStatus({
        message: 'Email updated successfully',
        isSuccess: true,
        isLoading: false,
      });
      addToast('Email updated successfully', 'success');
    } catch (error) {
      setStatus({
        message: error.message || 'Failed to update email',
        isSuccess: false,
        isLoading: false,
      });
      addToast(error.message || 'Failed to update email', 'danger');
    }
  };

  const handleCancelEmail = () => {
    setLocalEmail('');
    setIsEditingEmail(false);
  };

  /** HANDLERS for PhotoURL */
  const handleEditPhotoURL = () => {
    setLocalPhotoURL(formData.photoURL);
    setIsEditingPhotoURL(true);
  };

  const handleSavePhotoURL = async () => {
    setStatus({ ...status, isLoading: true });
    try {
      const user = auth.currentUser;
      await updateProfile(user, { photoURL: localPhotoURL });
      setFormData((prev) => ({ ...prev, photoURL: localPhotoURL }));
      setIsEditingPhotoURL(false);

      setStatus({
        message: 'Photo URL updated successfully',
        isSuccess: true,
        isLoading: false,
      });
      addToast('Photo URL updated successfully', 'success');
    } catch (error) {
      setStatus({
        message: error.message || 'Failed to update photo URL',
        isSuccess: false,
        isLoading: false,
      });
      addToast(error.message || 'Failed to update photo URL', 'danger');
    }
  };

  const handleCancelPhotoURL = () => {
    setLocalPhotoURL('');
    setIsEditingPhotoURL(false);
  };

  return (
    <Container>
      <Card>
        <Title>Profile Info</Title>

        {isValidImage(formData.photoURL) && (
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <img
              src={formData.photoURL}
              alt="Profile"
              style={{ width: '120px', borderRadius: '50%' }}
            />
          </div>
        )}

        <ProfileField
          label="Display Name:"
          value={formData.displayName}
          isEditing={isEditingDisplayName}
          localValue={localDisplayName}
          onEdit={handleEditDisplayName}
          onCancel={handleCancelDisplayName}
          onChange={setLocalDisplayName}
          onSave={handleSaveDisplayName}
          isLoading={status.isLoading}
        />

        <ProfileField
          label="Email:"
          value={formData.email}
          isEditing={isEditingEmail}
          localValue={localEmail}
          onEdit={handleEditEmail}
          onCancel={handleCancelEmail}
          onChange={setLocalEmail}
          onSave={handleSaveEmail}
          isLoading={status.isLoading}
        />

        <ProfileField
          label="Photo URL:"
          value={formData.photoURL}
          isEditing={isEditingPhotoURL}
          localValue={localPhotoURL}
          onEdit={handleEditPhotoURL}
          onCancel={handleCancelPhotoURL}
          onChange={setLocalPhotoURL}
          onSave={handleSavePhotoURL}
          isLoading={status.isLoading}
        />
      </Card>
    </Container>
  );
};

export default ProfilePage;
