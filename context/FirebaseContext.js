'use client'
import React, { createContext, useContext } from 'react';
import { db, storage } from '../utils/firebase';

const FirebaseContext = createContext({ db, storage });

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ db, storage }}>
      {children}
    </FirebaseContext.Provider>
  );
};
