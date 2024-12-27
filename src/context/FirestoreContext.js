// FirestoreContext.js
import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { db } from '../../firebaseConfig';

const FirestoreContext = createContext();

export const useFirestore = () => {
  return useContext(FirestoreContext);
};

export const FirestoreProvider = ({ children }) => {
  return (
    <FirestoreContext.Provider value={db}>{children}</FirestoreContext.Provider>
  );
};

FirestoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
