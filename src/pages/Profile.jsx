import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  getAuth,
  onAuthStateChanged,
  updateEmail,
  updateProfile,
} from 'firebase/auth';
import Button from 'atoms/Button';
import { useToast } from 'context/ToastContext'; // Import useToast hook

// Reusable container for the page
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

const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem;
`;

const FieldLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const FieldLabel = styled.strong`
  font-size: 1.8rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

const FieldValue = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const EditAction = styled.button`
  margin-left: 0.5rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: 500;
`;

const Spinner = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 3px solid white;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.5s linear infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ProfilePage = () => {
  const auth = getAuth();

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

  // Each field has its own edit mode
  const [isEditingDisplayName, setIsEditingDisplayName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPhotoURL, setIsEditingPhotoURL] = useState(false);

  const { addToast } = useToast(); // Get the addToast function from ToastContext

  const [status, setStatus] = useState({
    message: '',
    isSuccess: false,
    isLoading: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData({
          displayName: user.displayName || '',
          email: user.email || '',
          photoURL: user.photoURL || '',
        });
      }
    });
    return () => unsubscribe();
  }, [auth]);

  // Optionally check for valid images
  const isValidImage = (url) => {
    return /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg)$/i.test(url);
  };

  /* --------------------------------------------------
   *  Display Name Handlers
   * -------------------------------------------------- */
  const handleEditDisplayName = () => {
    setLocalDisplayName(formData.displayName);
    setIsEditingDisplayName(true);
  };

  const handleSaveDisplayName = async () => {
    setStatus({ message: '', isSuccess: false, isLoading: true });
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

  /* --------------------------------------------------
   *  Email Handlers
   * -------------------------------------------------- */
  const handleEditEmail = () => {
    setLocalEmail(formData.email);
    setIsEditingEmail(true);
  };

  const handleSaveEmail = async () => {
    setStatus({ message: '', isSuccess: false, isLoading: true });
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

  /* --------------------------------------------------
   *  Photo URL Handlers
   * -------------------------------------------------- */
  const handleEditPhotoURL = () => {
    setLocalPhotoURL(formData.photoURL);
    setIsEditingPhotoURL(true);
  };

  const handleSavePhotoURL = async () => {
    setStatus({ message: '', isSuccess: false, isLoading: true });
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

        {/* Image Preview (if valid) */}
        {isValidImage(formData.photoURL) && (
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <img
              src={formData.photoURL}
              alt="Profile"
              style={{ width: '120px', borderRadius: '50%' }}
            />
          </div>
        )}

        {/* -------------- Display Name Field -------------- */}
        <FieldRow>
          <FieldLabelWrapper>
            <FieldLabel>Display Name:</FieldLabel>
            <EditAction
              onClick={
                isEditingDisplayName
                  ? handleCancelDisplayName
                  : handleEditDisplayName
              }
            >
              {isEditingDisplayName ? 'Cancel' : 'Edit'}
            </EditAction>
          </FieldLabelWrapper>

          {!isEditingDisplayName ? (
            <FieldValue>{formData.displayName}</FieldValue>
          ) : (
            <InputWrapper>
              <Input
                type="text"
                name="displayName"
                value={localDisplayName}
                onChange={(e) => setLocalDisplayName(e.target.value)}
              />
              <Button
                onClick={handleSaveDisplayName}
                disabled={status.isLoading}
                size="small"
                variant="outline"
              >
                {status.isLoading && <Spinner />}
                Save
              </Button>
            </InputWrapper>
          )}
        </FieldRow>

        {/* -------------- Email Field -------------- */}
        <FieldRow>
          <FieldLabelWrapper>
            <FieldLabel>Email:</FieldLabel>
            <EditAction
              onClick={isEditingEmail ? handleCancelEmail : handleEditEmail}
            >
              {isEditingEmail ? 'Cancel' : 'Edit'}
            </EditAction>
          </FieldLabelWrapper>

          {!isEditingEmail ? (
            <FieldValue>{formData.email}</FieldValue>
          ) : (
            <InputWrapper>
              <Input
                type="email"
                value={localEmail}
                onChange={(e) => setLocalEmail(e.target.value)}
              />
              <Button
                onClick={handleSaveEmail}
                disabled={status.isLoading}
                size="small"
                variant="outline"
              >
                {status.isLoading && <Spinner />}
                Save
              </Button>
            </InputWrapper>
          )}
        </FieldRow>

        {/* -------------- Photo URL Field -------------- */}
        <FieldRow>
          <FieldLabelWrapper>
            <FieldLabel>Photo URL:</FieldLabel>
            <EditAction
              onClick={
                isEditingPhotoURL ? handleCancelPhotoURL : handleEditPhotoURL
              }
            >
              {isEditingPhotoURL ? 'Cancel' : 'Edit'}
            </EditAction>
          </FieldLabelWrapper>

          {!isEditingPhotoURL ? (
            <FieldValue>{formData.photoURL}</FieldValue>
          ) : (
            <InputWrapper>
              <Input
                type="text"
                value={localPhotoURL}
                onChange={(e) => setLocalPhotoURL(e.target.value)}
              />
              <Button
                onClick={handleSavePhotoURL}
                disabled={status.isLoading}
                size="small"
                variant="outline"
              >
                {status.isLoading && <Spinner />}
                Save
              </Button>
            </InputWrapper>
          )}
        </FieldRow>
      </Card>
    </Container>
  );
};

export default ProfilePage;
