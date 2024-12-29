// useContent.js
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useFirestore } from 'context/FirestoreContext';

const useContent = (docId) => {
  const db = useFirestore();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!docId) return;

    const fetchData = async () => {
      try {
        const docRef = doc(db, 'content', docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          // eslint-disable-next-line no-console
          console.warn(`No such document: content/${docId}`);
          setError('No data found');
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Error fetching document content/${docId}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [db, docId]);

  return { data, loading, error };
};

export default useContent;
