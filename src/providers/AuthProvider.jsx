import React, { createContext } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../utilities/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const gitHubAuthProvider = new GithubAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const twitterAuthProvider = new TwitterAuthProvider();
const yahooAuthProvider = new OAuthProvider('yahoo.com');

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
	
	const resetPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	}

	const signInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleAuthProvider);
	}
	
	const signInWithGitHub = () => {
		setLoading(true);
		return signInWithPopup(auth, gitHubAuthProvider);
	}
	
	const signInWithFacebook = () => {
		setLoading(true);
		return signInWithPopup(auth, facebookAuthProvider);
	}
	
	const signInWithTwitter = () => {
		setLoading(true);
		return signInWithPopup(auth, twitterAuthProvider);
	}
	
	const signInWithYahoo = () => {
		setLoading(true);
		return signInWithPopup(auth, yahooAuthProvider);
	}


	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
			console.log('Auth Change Observer', loggedInUser)
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
		setLoading,
		createUser,
		logIn,
		resetPassword,
		signInWithGoogle,
		signInWithGitHub,
		signInWithFacebook,
		signInWithTwitter,
		signInWithYahoo,
		logOut
	}

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;