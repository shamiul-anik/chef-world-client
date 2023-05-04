import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Registration = () => {

	const [error, setError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const { createUser } = useContext(AuthContext);
	// const [accepted, setAccepted] = useState(false);

	const handleRegistration = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		console.log(name, photoURL, email, password)

		setEmailError("");
		setPasswordError("");

		if (email.length < 1) {
			setEmailError("Email field can not be empty!");
			return;
		}
		
		if (password.length < 1) {
			setPasswordError("Password field can not be empty!");
			return;
		}
		
		if (password.length < 6) {
			setPasswordError("Password should be at least 6 characters long!");
			return;
		}

		createUser(email, password)
			.then(result => {
				const createdUser = result.user;
				console.log(createdUser);
			})
			.catch(error => {
				setError(error.message);
			})
	};

	// const handleAccepted = event => {
	//   setAccepted(event.target.checked)
	// }

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	console.log("submitted!");
	// };

	const handleGoogleLogin = (event) => {
		event.preventDefault();
		console.log("handleGoogleLogin");
	};

	const handleGitHubLogin = (event) => {
		event.preventDefault();
		console.log("handleGitHubLogin");
	};

	return (
		<section className="max-w-lg mx-auto mt-4 lg:mt-20 p-4">
			<div className="flex card card-compact w-full bg-base-100 shadow-2xl">

				<div className="flex-1 p-6 md:p-8 pt-5 pb-1 md:pb-2">
					<h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Register your account</h3>
				</div>

				<div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div>

				<p className="!px-6 md:!px-8 text-red-500 mt-2 text-center">{error}</p>

				<form onSubmit={handleRegistration}>
					<div className="!px-6 md:!px-8 !pt-2 card-body">
						<div className="form-control">
							<label className="label pl-0" htmlFor="email">
								<span className="label-text text-lg">Email</span>
							</label>
							<input type="email" id="email" name="email" placeholder="Enter your email address" className="input input-bordered" />
							<p className="text-red-500 mt-2">{emailError}</p> {/* Error Message */}
						</div>
						<div className="form-control">
							<label className="label pl-0" htmlFor="password">
								<span className="label-text text-lg">Password</span>
							</label>
							<input type="password" id="password" name="password" placeholder="Enter your password" className="input input-bordered" />
							<p className="text-red-500 mt-2">{passwordError}</p> {/* Error Message */}
						</div>
						<div className="form-control">
							<label className="label pl-0" htmlFor="name">
								<span className="label-text text-lg">Name</span>
							</label>
							<input type="text" id="name" name="name" placeholder="Enter your name" className="input input-bordered" />
							<p className="text-red-500 mt-2"></p> {/* Error Message */}
						</div>
						<div className="form-control">
							<label className="label pl-0" htmlFor="photoURL">
								<span className="label-text text-lg">Photo URL</span>
							</label>
							<input type="text" id="photoURL" name="photoURL" placeholder="Enter your photo url" className="input input-bordered" />
							<p className="text-red-500 mt-2"></p> {/* Error Message */}
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary text-lg" type="submit">Register</button>
						</div>
					</div>
				</form>
				<div className="p-6 md:p-8 !pb-1 pt-1 md:pt-2">
					Already have an account? &nbsp;
					<Link to="/login" className='link link-primary'>Login</Link>
				</div>

				<div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div>

				<div className="!px-6 md:!px-8 !pt-3 card-body">
					<div className="form-control">
						<button onClick={handleGoogleLogin} className="btn btn-outline btn-primary text-lg">
							<FaGoogle className="mr-2" /> Login with Google
						</button>
					</div>
					<div className="form-control mt-1 mb-5">
						<button onClick={handleGitHubLogin} className="btn btn-outline btn-base text-lg">
							<FaGithub className="mr-2" /> Login with GitHub
						</button>
					</div>
				</div>

			</div>
		</section>
	);
};

export default Registration;