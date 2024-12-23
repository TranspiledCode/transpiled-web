import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Button from 'atoms/Button';

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

const ProfileField = ({
  label,
  value,
  isEditing,
  localValue,
  onEdit,
  onCancel,
  onChange,
  onSave,
  isLoading,
}) => {
  return (
    <FieldRow>
      <FieldLabelWrapper>
        <FieldLabel>{label}</FieldLabel>
        <EditAction onClick={isEditing ? onCancel : onEdit}>
          {isEditing ? 'Cancel' : 'Edit'}
        </EditAction>
      </FieldLabelWrapper>

      {!isEditing ? (
        <FieldValue>{value}</FieldValue>
      ) : (
        <InputWrapper>
          <Input
            type="text"
            value={localValue}
            onChange={(e) => onChange(e.target.value)}
          />
          <Button
            onClick={onSave}
            disabled={isLoading}
            size="small"
            variant="outline"
          >
            {isLoading && <Spinner />}
            Save
          </Button>
        </InputWrapper>
      )}
    </FieldRow>
  );
};

ProfileField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  localValue: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default ProfileField;
