// useFirestoreUpdate.js
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { useFirestore } from 'context/FirestoreContext';

const useFirestoreUpdate = (collection, docId, subCollection = null) => {
  const db = useFirestore();
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);

  const updateDocument = async (documentId, data) => {
    setUpdating(true);
    setError(null);

    try {
      const docPath = subCollection
        ? `${collection}/${docId}/${subCollection}/${documentId}`
        : `${collection}/${docId}`;

      const docRef = doc(db, docPath);

      await updateDoc(docRef, data);
      return true;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error in useFirestoreUpdate:', err);
      setError(err.message);
      throw err;
    } finally {
      setUpdating(false);
    }
  };

  return { updateDocument, updating, error };
};

export default useFirestoreUpdate;
