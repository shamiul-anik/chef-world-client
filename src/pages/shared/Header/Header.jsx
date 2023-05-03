import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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
							<div className="flex mt-2">
								<Link to="/login" className="primary-button-sm flex-1">Login</Link>
							</div>
						</ul>
					</div>
					<Link to="/" className="btn px-0 btn-ghost normal-case font-extrabold text-2xl lg:text-3xl text-slate-700 hover:bg-inherit">Chef World</Link>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="flex gap-10 text-xl font-semibold menu-horizontal px-1">
						<li className="nav-item hover:cursor-pointer">
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="nav-item hover:cursor-pointer">
							<NavLink to="/blog">Blog</NavLink>
						</li>
						<li>
							<Link to="/login" className="primary-button-md">Login</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;