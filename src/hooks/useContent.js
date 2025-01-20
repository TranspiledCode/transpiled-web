// useContent.js
import { useEffect, useState } from 'react';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useFirestore } from 'context/FirestoreContext';

/**
 * Fetches data from Firestore given a document ID and optional subcollection.
 *
 * The returned object contains four properties:
 *   - `data`: the main document data
 *   - `entries`: the subcollection data, if specified
 *   - `loading`: whether the data is still being fetched
 *   - `error`: any errors that occurred while fetching the data
 *
 * If the document does not exist, `error` will be set to 'No data found'.
 *
 * @param {string} docId - the document ID to fetch
 * @param {string} [subCollection] - the subcollection to fetch, if any
 * @returns {Object} the data, entries, loading, and error
 *
 * @example
 * const { data, entries, loading, error } = useContent('testimonials');
 *
 */
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
