import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../utilities/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	}


	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, loggedInUser => {
			console.log('logged in user inside auth state observer', loggedInUser)
			setUser(loggedInUser);
			setLoading(false);
		})

		return () => {
			unSubscribe();
		}
	}, [])

	const authInfo = {
		user,
		setUser,
		loading,
		createUser,
		logIn,
		logOut
	}

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;