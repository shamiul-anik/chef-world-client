import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/shared/Loader/Loader';

const PrivateRoute = ({ children }) => {

	const { user, loading } = useContext(AuthContext);

	const location = useLocation();
	// console.log('user in private route', user);

	if (loading) {
		return <Loader></Loader>
	}

	if (user) {
		return children;
	}

	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;