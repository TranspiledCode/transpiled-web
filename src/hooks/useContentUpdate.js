// hooks/useContentUpdate.js
import { useCallback } from 'react';
import useFirestoreUpdate from './useFirestoreUpdate';
import { useAuth } from 'context/AuthContext';

const contentTypes = {
  testimonial: {
    collection: 'content',
    docId: 'testimonials',
    subCollection: 'entries',
    formatUpdate: ({ text }) => ({
      content: {
        // Remove leading and trailing double quotes
        text: text.replace(/^"|"$/g, ''),
      },
    }),
  },
  // Add more content types as needed
};

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
