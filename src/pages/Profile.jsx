import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { isValidImage } from 'utils/validate';
import useProfile from 'hooks/useProfile';
import { useToast } from 'context/ToastContext';
import ProfileField from 'organisms/ProfileField';

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

const ProfilePage = () => {
  const defaultProfileImage =
    'https://storage.googleapis.com/transpiled-web/images/default-user-image.png';

  const { formData, status, handleUpdate } = useProfile(defaultProfileImage);

  const [editStates, setEditStates] = useState({
    displayName: { isEditing: false, localValue: '' },
    email: { isEditing: false, localValue: '' },
    photoURL: { isEditing: false, localValue: '' },
  });

  const { addToast } = useToast();
  useEffect(() => {
    if (status.message) {
      addToast(status.message, status.isSuccess ? 'success' : 'danger');
    }
  }, [status, addToast]);

  const handleEdit = (field) => {
    setEditStates((prev) => ({
      ...prev,
      [field]: { isEditing: true, localValue: formData[field] },
    }));
  };

  const handleCancel = (field) => {
    setEditStates((prev) => ({
      ...prev,
      [field]: { isEditing: false, localValue: '' },
    }));
  };

  const handleSave = async (field) => {
    const newValue = editStates[field].localValue;
    await handleUpdate(field, newValue);
    setEditStates((prev) => ({
      ...prev,
      [field]: { isEditing: false, localValue: '' },
    }));
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

        {Object.keys(formData).map((field) => (
          <ProfileField
            key={field}
            label={`${field.charAt(0).toUpperCase() + field.slice(1)}:`}
            value={formData[field]}
            isEditing={editStates[field].isEditing}
            localValue={editStates[field].localValue}
            onEdit={() => handleEdit(field)}
            onCancel={() => handleCancel(field)}
            onChange={(value) =>
              setEditStates((prev) => ({
                ...prev,
                [field]: { ...prev[field], localValue: value },
              }))
            }
            onSave={() => handleSave(field)}
            isLoading={status.isLoading}
          />
        ))}
      </Card>
    </Container>
  );
};

export default ProfilePage;
