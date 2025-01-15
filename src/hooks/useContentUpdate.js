// hooks/useContentUpdate.js
import { useCallback } from 'react';
import useFirestoreUpdate from './useFirestoreUpdate';
import { useAuth } from 'context/AuthContext';

const contentTypes = {
  testimonial: {
    collection: 'content',
    docId: 'testimonials',
    subCollection: 'entries',
    formatUpdate: ({ text, fieldPath }) => {
      // Handle testimonial-specific formatting
      if (fieldPath === 'content.text') {
        return {
          content: {
            text: text.replace(/^"|"$/g, ''), // Remove surrounding quotes
          },
        };
      }
      // Add other field updates as needed
      return {};
    },
  },
  // Add other content types here
  page: {
    collection: 'content',
    docId: 'pages',
    formatUpdate: ({ text, fieldPath }) => {
      // Create nested object based on fieldPath
      const fields = fieldPath.split('.');
      const result = {};
      let current = result;

      fields.slice(0, -1).forEach((field) => {
        current[field] = {};
        current = current[field];
      });

      current[fields[fields.length - 1]] = text;
      return result;
    },
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
    async ({ id, fieldPath, text }) => {
      const baseUpdate = config.formatUpdate({ text, fieldPath });

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
