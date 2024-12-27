import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBzOWx9-QELalhXcjrDpj4lkIh-Pe_eLwg',
  authDomain: 'traspiledweb.firebaseapp.com',
  databaseURL: 'https://traspiledweb-default-rtdb.firebaseio.com',
  projectId: 'traspiledweb',
  storageBucket: 'traspiledweb.firebasestorage.app',
  messagingSenderId: '603175811477',
  appId: '1:603175811477:web:94a0e3af7b6e0dd8a85e9c',
  measurementId: 'G-QNDJSZ4XW6',
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
