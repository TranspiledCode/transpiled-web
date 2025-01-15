import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import PropTypes from 'prop-types';
import { auth } from 'config/firebase';

// Create initial state object
const initialAuthState = {
  currentUser: null,
  authClaims: null,
  loading: true,
  isAuthenticated: false,
  isAdmin: false,
  error: null,
};

const AuthContext = createContext(initialAuthState);

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(initialAuthState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(
        'Auth state changed:',
        user ? 'User logged in' : 'User logged out',
      );

      if (user) {
        try {
          const idTokenResult = await user.getIdTokenResult();

          setAuthState({
            currentUser: user,
            authClaims: idTokenResult.claims,
            loading: false,
            isAuthenticated: true,
            isAdmin: idTokenResult.claims?.admin === true,
            error: null,
          });
        } catch (error) {
          setAuthState({
            ...initialAuthState,
            loading: false,
            error: error.message,
          });
        }
      } else {
        setAuthState({
          ...initialAuthState,
          loading: false,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
export default AuthContext;
