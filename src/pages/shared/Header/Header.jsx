import React, { useContext } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { TbChefHat } from "react-icons/tb";
import { AuthContext } from '../../../providers/AuthProvider';
import Loader from '../Loader/Loader';

const Header = () => {

	const { user, logOut, loading } = useContext(AuthContext);

	const currentUserName = user?.displayName || "Welcome, user!";
	const currentUserPhotoURL = user?.photoURL || "https://i.ibb.co/rwwW7Qw/user.png";

	// Show Loader when Page is Loading
	if (loading) {
		return <Loader></Loader>;
	}

	// console.log("Name from Header: ", currentUserName);
	// console.log("Photo URL from Header: ", currentUserPhotoURL);

	const handleLogOut = () => {
		logOut()
			.then((result) => {
				console.log("Successfully logged out!");
			})
			.catch((error) => {
				console.log(error.message);
			})
	};

	return (
		<div className="box-shadow-custom py-2">
			<nav className="navbar max-w-7xl mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52">
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/blog">Blog</NavLink>
							</li>
							<li>
								<NavLink to="/about">About</NavLink>
							</li>
							{
								!user && (
									<div className="flex mt-2">
										<Link to="/login" className="primary-button-sm flex-1">Login</Link>
									</div>
								)
							}
							{
								user && (
									<div className="flex mt-2">
										<Link onClick={handleLogOut} className="primary-button-sm flex-1">Logout</Link>
									</div>
								)
							}
						</ul>
					</div>
					<Link to="/" className="flex gap-2 items-center btn px-0 btn-ghost normal-case font-extrabold text-2xl lg:text-3xl text-slate-700 hover:bg-inherit">
						<TbChefHat className='h-10 w-10' />
						Chef World
					</Link>
				</div>

				<div className="navbar-end hidden lg:flex">
					<ul className="flex gap-10 text-xl font-semibold menu-horizontal px-1">
						<li className="nav-item hover:cursor-pointer">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="nav-item hover:cursor-pointer">
							<NavLink to="/blog">Blog</NavLink>
						</li>
						<li className="nav-item hover:cursor-pointer">
							<NavLink to="/about">About</NavLink>
						</li>
						{
							!user && (
								<li>
									<Link to="/login" className="primary-button-md">Login</Link>
								</li>
							)
						}
					</ul>

					{/* User Profile */}
					{
						user && (
							<div className="dropdown dropdown-end mt-1 ml-6">
								<label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={currentUserName}>
									<div className="w-10 rounded-full ring-2 ring-offset-2 ring-slate-400">
										<img className='object-top' src={currentUserPhotoURL} alt={currentUserName} />
									</div>
								</label>
								<ul tabIndex={0} className="mt-3 p-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
									<div className='w-full flex justify-center'>
										<div className="mt-2 mb-3 h-16 w-16 rounded-full ring-2 ring-offset-2 ring-slate-400">
											<img className='h-16 w-full rounded-full object-cover object-center' src={currentUserPhotoURL} alt={currentUserName} />
										</div>
									</div>
									<li className='mt-1 text-center'>{currentUserName}</li>
									<div className="divider mt-1 mb-2"></div>
									<li>
										<Link onClick={handleLogOut} className="bg-red-500 hover:bg-red-600 transition hover:delay-200 text-white font-bold py-2 justify-center">Logout</Link>
									</li>
								</ul>
							</div>
						)
					}

				</div>
			</nav>
		</div>
	);
};

export default Header;