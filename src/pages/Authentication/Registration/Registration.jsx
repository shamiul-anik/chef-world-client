import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub, FaRegEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { useTitle } from '../../../hooks/useTitle';

const Registration = () => {

	useTitle("Registration");

	const navigate = useNavigate();

	const { createUser, logOut, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [acceptTerms, setAcceptTerms] = useState(false);

	// const [accepted, setAccepted] = useState(false);

	const handleRegistration = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		console.log(name, photoURL, email, password)

		setSuccess("");
		setError("");
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
				const currentUser = result.user;
				console.log(currentUser);
				if (name || photoURL) {
					console.log("inside update condition");
					updateUserData(currentUser, name, photoURL);
				}
				setSuccess("Registration successful!");
				toast.success("Registration successful!");
				handleLogOut();
				form.reset();
				navigate("/login");
			})
			.catch(error => {
				setError(error.message);
			})
	};

	// Logout 
	const handleLogOut = () => {
		logOut()
			.then((result) => {
				console.log("Successfully logged out!");
			})
			.catch((error) => {
				console.log(error.message);
			})
	};

	const updateUserData = (currentUser, name, photoURL) => {
		updateProfile(currentUser, {
			displayName: name, 
			photoURL: photoURL
		}).then(() => {
			console.log("Profile updated!");
		}).catch((error) => {
			setError(error.message);
		});
	};

	const handleGoogleRegistration = () => {
		signInWithGoogle()
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				toast.success("Successfully registered!");
				navigate("/");
			})
			.catch(error => {
				setError(error.message);
			})
	};

	const handleGitHubRegistration = () => {
		signInWithGitHub()
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				toast.success("Successfully registered!");
				navigate("/");
			})
			.catch(error => {
				setError(error.message);
			})
	};

	// Show/Hide Password
	const handleShowPassword = (event) => {
		event.preventDefault();
		setShowPassword(!showPassword);
	};

	// Accept Terms 
	const handleAcceptTerms = (event) => {
		setAcceptTerms(event.target.checked);
	}

	return (
		<section className="max-w-lg mx-auto mt-4 lg:mt-20 p-4">
			<div className="flex card card-compact w-full bg-base-100 shadow-2xl">

				<div className="flex-1 p-6 md:p-8 pt-5 pb-1 md:pb-2">
					<h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Register your Account</h3>
				</div>

				<div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div>

				<p className="!px-6 md:!px-8 text-red-500 mt-2 text-center">{error}</p>
				<p className="!px-6 md:!px-8 text-green-600 mt-2 text-center">{success}</p>

				<form onSubmit={handleRegistration}>
					<div className="!px-6 md:!px-8 !pt-2 card-body">
						<div className="form-control">
							<label className="label pl-0" htmlFor="email">
								<span className="label-text text-lg">Email</span>
							</label>
							<input type="email" id="email" name="email" placeholder="Enter your email address" className="input input-bordered" />
							<p className="text-red-500 mt-2">{emailError}</p> {/* Error Message */}
						</div>
						<div className="relative form-control">
							<label className="label pl-0" htmlFor="password">
								<span className="label-text text-lg">Password</span>
							</label>
							<input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" className="input input-bordered" autoComplete='true' />
							<button onClick={handleShowPassword} className="btn btn-ghost absolute bottom-0 right-0 rounded-l-none">
								{
									showPassword ? <FaRegEyeSlash className='text-lg md:text-xl font-bold' /> : <FaRegEye className='text-lg md:text-xl font-bold' />
								}
							</button>
						</div>
						<p className="text-red-500">{passwordError}</p>

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
						<div className="form-control mt-4">
							<label className="label !justify-start gap-2 cursor-pointer">
								<input onChange={handleAcceptTerms} type="checkbox" className="checkbox border-gray-400 shadow-sm" id="terms" />
								<span htmlFor="terms" className="label-text text-md md:text-lg">Accept</span>
								{/* To Open Modal */}
								<label htmlFor="terms-modal" className="text-md md:text-lg link link-primary"> Terms & Conditions.</label>
							</label>
						</div>
						<div className="form-control mt-1">
							<button className="btn btn-primary text-lg" type="submit" disabled={!acceptTerms}>Register</button>
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
						<button onClick={handleGoogleRegistration} className="btn btn-outline btn-primary text-lg">
							<FaGoogle className="mr-2" /> Register with Google
						</button>
					</div>
					<div className="form-control mt-1 mb-5">
						<button onClick={handleGitHubRegistration} className="btn btn-outline btn-base text-lg">
							<FaGithub className="mr-2" /> Register with GitHub
						</button>
					</div>
				</div>
			</div>

			{/* Terms & Conditions Modal */}
			<input type="checkbox" id="terms-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box w-11/12 max-w-5xl !overflow-y-hidden">
					<label htmlFor="terms-modal" className="btn btn-sm btn-circle absolute right-3 top-3">✕</label>
					<h3 className="font-bold text-2xl text-center">Terms and Conditions</h3>
					<hr className='mt-4' />
					<div className='text-slate-600 mt-4 text-justify pr-4 overflow-y-auto max-h-[calc(100dvh-300px)]'>
						<p className="mb-3 font-bold text-lg">Welcome to Chef World website!</p>
						<p>By using our website, you agree to be bound by the following terms and conditions:</p>

						<div className='mt-3'>
							<p className='font-semibold underline underline-offset-2 mt-2'>1. Use of Website Content:</p>
							<p>All content on Chef World website including text, images, recipes, videos, and any other material is for personal use only. You are not allowed to reproduce, modify, distribute, or use any content without our prior written consent.</p>

							<p className='font-semibold underline underline-offset-2 mt-2'>2. Chef Information and Recipes:</p>
							<p>We strive to provide accurate and up-to-date information about chefs and their recipes, but we do not guarantee the accuracy of such information. Chef World is not responsible for any damages or losses incurred from the use of this information.</p>

							<p className='font-semibold underline underline-offset-2 mt-2'>3. Third-Party Links:</p>
							<p>Our website may contain links to third-party websites that are not owned or controlled by Chef World. We are not responsible for the content or privacy policies of these websites.</p>

							<p className='font-semibold underline underline-offset-2 mt-2'>4. User Conduct:</p>
							<p>You are responsible for your use of Chef World website and any content you post. You agree not to use the website for any illegal or harmful purposes, including but not limited to spreading hate speech, infringing on intellectual property rights, or harassing others.</p>

							<p className='font-semibold underline underline-offset-2 mt-2'>5. Disclaimer of Warranties:</p>
							<p>Chef World website and its content are provided "as is" without any warranties, express or implied. We do not guarantee that the website will be error-free, uninterrupted, or secure.</p>

							<p className='font-semibold underline underline-offset-2 mt-2'>6. Limitation of Liability:</p>
							<p>Chef World shall not be liable for any damages arising out of your use or inability to use our website, including but not limited to direct, indirect, incidental, consequential, or punitive damages.</p>

							<p className='font-semibold underline underline-offset-2 mt-2'>7. Changes to Terms and Conditions:</p>
							<p>We reserve the right to modify these terms and conditions at any time. Your continued use of the website after any such changes constitutes your acceptance of the new terms.</p>

						</div>

						<p className='mt-4'>Thank you for using Chef World website. If you have any questions or concerns, please contact us at <span className='text-blue-500'>info@chefworld.com</span>.</p>
					</div>
					<hr className='mt-4' />
					<div className="modal-action">
						<label htmlFor="terms-modal" className="btn">Okay</label>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Registration;