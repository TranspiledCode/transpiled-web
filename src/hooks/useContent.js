// useContent.js
import { useEffect, useState } from 'react';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useFirestore } from 'context/FirestoreContext';

const useContent = (docId, subCollection = null) => {
  const db = useFirestore();
  const [data, setData] = useState(null);
  const [entries, setEntries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!docId) return;

    const fetchData = async () => {
      try {
        // Fetch main document
        const docRef = doc(db, 'content', docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());

          // Fetch subcollection if specified
          if (subCollection) {
            const entriesRef = collection(db, 'content', docId, subCollection);
            const entriesSnap = await getDocs(entriesRef);

            const entriesData = {};
            entriesSnap.forEach((doc) => {
              entriesData[doc.id] = doc.data();
            });

            setEntries(entriesData);
          }
        } else {
          // eslint-disable-next-line no-console
          console.warn(`No such document: content/${docId}`);
          setError('No data found');
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`Error fetching content/${docId}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [db, docId, subCollection]);

  return { data, entries, loading, error };
};

export default useContent;
