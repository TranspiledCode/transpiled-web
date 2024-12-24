import { useState, useEffect } from 'react';
import {
  getAuth,
  onAuthStateChanged,
  updateEmail,
  updateProfile,
} from 'firebase/auth';
import { isValidImage } from 'utils/validate';

const useProfile = (defaultProfileImage) => {
  const auth = getAuth();

  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    photoURL: defaultProfileImage,
  });

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
          photoURL: isValidImage(user.photoURL)
            ? user.photoURL
            : defaultProfileImage,
        });
      } else {
        setFormData({
          displayName: '',
          email: '',
          photoURL: defaultProfileImage,
        });
      }
    });

    return () => unsubscribe();
  }, [auth, defaultProfileImage]);

  const handleUpdate = async (field, newValue) => {
    const user = auth.currentUser;
    if (!user) return;

    setStatus((prev) => ({ ...prev, isLoading: true, message: '' }));

    try {
      if (field === 'email') {
        await updateEmail(user, newValue);
      } else {
        await updateProfile(user, { [field]: newValue });
      }

      setFormData((prev) => ({ ...prev, [field]: newValue }));

      setStatus({
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully`,
        isSuccess: true,
        isLoading: false,
      });
    } catch (error) {
      setStatus({
        message: error.message || `Failed to update ${field}`,
        isSuccess: false,
        isLoading: false,
      });
    }
  };

  return {
    formData,
    status,
    handleUpdate,
  };
};

export default useProfile;
