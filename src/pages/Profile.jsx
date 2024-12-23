import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import {
  getAuth,
  onAuthStateChanged,
  updateEmail,
  updateProfile,
} from 'firebase/auth';

// Reusable container for the page
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  padding-top: 10rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 600px;
  max-width: 90%;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  margin-top: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

// Profile image preview container
const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  img {
    border-radius: 50%;
    object-fit: cover;
    width: 120px;
    height: 120px;
    border: 2px solid #e5e7eb;
  }
`;

const Button = styled.button`
  width: auto;
  padding: 0.75rem 1.2rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 1rem;
  margin-right: 1rem;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

// Alert styling component for success/error messages
const Alert = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${({ isSuccess }) => (isSuccess ? '#dcfce7' : '#fee2e2')};
  color: ${({ isSuccess }) => (isSuccess ? '#166534' : '#991b1b')};
  text-align: center;
  font-weight: 500;
`;

// Spinner component for loading state
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
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    photoURL: '',
  });
  const [status, setStatus] = useState({
    message: '',
    isSuccess: false,
    isLoading: false,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Subscribe to onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData({
          displayName: user.displayName || '',
          email: user.email || '',
          photoURL: user.photoURL || '',
        });
      } else {
        setFormData({
          displayName: '',
          email: '',
          photoURL: '',
        });
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;

    setStatus({ message: '', isSuccess: false, isLoading: true });

    try {
      // Update profile info
      await updateProfile(user, {
        displayName: formData.displayName,
        photoURL: formData.photoURL,
      });

      // Update email if changed
      if (user.email !== formData.email) {
        await updateEmail(user, formData.email);
      }

      setStatus({
        message: 'Profile updated successfully!',
        isSuccess: true,
        isLoading: false,
      });

      // Done editing, if you want to auto-close editing mode
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      setStatus({
        message: error.message || 'Failed to update profile',
        isSuccess: false,
        isLoading: false,
      });
    }
  };

  const isValidImage = (url) => {
    // Quick check for typical image file extensions
    return /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg)$/i.test(url);
  };

  const handleCancel = () => {
    // Optional: you might want to revert formData to the original user data here
    // e.g. re-fetch from auth.currentUser or store original in separate state
    setIsEditing(false);
  };

  return (
    <Container>
      <Card>
        <Title>Manage Your Profile</Title>

        {isValidImage(formData.photoURL) && (
          <ImagePreview>
            <img src={formData.photoURL} alt="Profile Preview" />
          </ImagePreview>
        )}

        {/* 
          =============
          READ-ONLY VIEW
          ============= 
        */}
        {!isEditing && (
          <div>
            <p>
              <strong>Display Name:</strong> {formData.displayName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Photo URL:</strong> {formData.photoURL}
            </p>
            <Button type="button" onClick={() => setIsEditing(true)}>
              Edit
            </Button>
          </div>
        )}

        {/* 
          ============
          EDITING VIEW
          ============ 
        */}
        {isEditing && (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                type="text"
                value={formData.displayName}
                onChange={handleInputChange}
                placeholder="Enter your display name"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="photoURL">Profile Image URL</Label>
              <Input
                id="photoURL"
                type="text"
                value={formData.photoURL}
                onChange={handleInputChange}
                placeholder="Enter a valid image URL"
              />
            </FormGroup>

            <Button type="submit" disabled={status.isLoading}>
              {status.isLoading && <Spinner />}
              {status.isLoading ? 'Updating...' : 'Save Changes'}
            </Button>

            <Button
              type="button"
              onClick={handleCancel}
              disabled={status.isLoading}
            >
              Cancel
            </Button>
          </Form>
        )}

        {status.message && (
          <Alert isSuccess={status.isSuccess}>{status.message}</Alert>
        )}
      </Card>
    </Container>
  );
};

export default ProfilePage;
