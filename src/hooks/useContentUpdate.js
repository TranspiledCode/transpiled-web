// hooks/useContentUpdate.js
import { useCallback } from 'react';
import useFirestoreUpdate from './useFirestoreUpdate';
import { useAuth } from 'context/AuthContext';
import contentTypes from 'cms/contentConfig';

const useContentUpdate = (contentType) => {
  const { currentUser } = useAuth();
  const config = contentTypes[contentType];

  if (!config) {
    throw new Error(`Unsupported content type: ${contentType}`);
  }

  const { updateDocument } = useFirestoreUpdate(
    config.collection,
    config.docId,
    config.subCollection,
  );

  const handleSave = useCallback(
    async ({ id, text }) => {
      const baseUpdate = config.formatUpdate({ text });

      const updateData = {
        ...baseUpdate,
        metadata: {
          updatedAt: new Date(),
          updatedBy: currentUser?.displayName || 'anonymous',
        },
      };

      try {
        await updateDocument(id, updateData);
        return true;
      } catch (error) {
        console.error('Error updating content:', error);
        throw error;
      }
    },
    [config, updateDocument, currentUser],
  );

  return { handleSave };
};

export default useContentUpdate;
