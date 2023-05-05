import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {

	const { setLoading, logIn, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	
	const navigate = useNavigate();

	const location = useLocation();
	// console.log('login page location', location)
	const from = location.state?.from?.pathname || '/';

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		
		setLoading(true);
		
		setError("");
		console.log(email, password);

		logIn(email, password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				toast.success("Successfully logged in!");
				navigate(from, { replace: true })
			})
			.catch(error => {
				setError(error.message);
				toast.error("Enter correct email and password!");
				setLoading(false);
			})
	};

	const handleShowPassword = (event) => {
		event.preventDefault();
		setShowPassword(!showPassword);
	};
	
	const handleGoogleLogin = () => {
		signInWithGoogle()
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				toast.success("Successfully logged in!");
				navigate(from, { replace: true })
			})
			.catch(error => {
				setError(error.message);
				setLoading(false);
			})
	};
	
	const handleGitHubLogin = () => {
		signInWithGitHub()
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				toast.success("Successfully logged in!");
				navigate(from, { replace: true })
			})
			.catch(error => {
				setError(error.message);
				setLoading(false);
			})
	};

	return (
		<section className="max-w-lg mx-auto mt-4 lg:mt-20 p-4">
			<div className="flex card card-compact w-full bg-base-100 shadow-2xl">
				
				<div className="flex-1 p-6 md:p-8 pt-5 pb-1 md:pb-2">
					<h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Login to your Account</h3>
				</div>
				
				<div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div>

				<p className="!px-6 md:!px-8 text-red-500 mt-2 text-center">{error}</p>
				
				<form onSubmit={handleLogin}>
					<div className="!px-6 md:!px-8 !pt-2 card-body">
						<div className="form-control">
							<label className="label pl-0" htmlFor="email">
								<span className="label-text text-lg">Email</span>
							</label>
							<input type="email" id="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
							<p className="text-red-500 mt-2"></p>
						</div>
						{/* <div className="form-control">
							<label className="label pl-0" htmlFor="password">
								<span className="label-text text-lg">Password</span>
							</label>
							<input type="password" id="password" name="password" placeholder="Enter your password" className="input input-bordered" autoComplete='true' required />
							<p className="text-red-500 mt-2"></p>
						</div> */}

							{/* <label className="label">
								<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
							</label> */}
						<div className="relative form-control">
							<label className="label pl-0" htmlFor="password">
								<span className="label-text text-lg">Password</span>
							</label>
							<input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" className="input input-bordered" autoComplete='true' required />
							<button onClick={handleShowPassword} className="btn btn-ghost absolute bottom-0 right-0 rounded-l-none">
								{
									showPassword ? <FaRegEyeSlash className='text-lg md:text-xl font-bold' /> : <FaRegEye className='text-lg md:text-xl font-bold' />
								}
							</button>
						</div>
						<p className="text-red-500 mt-2"></p>

						<div className="form-control mt-6">
							<button className="btn btn-primary text-lg" type="submit">Login</button>
						</div>
					</div>
				</form>
				<div className="p-6 md:p-8 !pb-1 pt-1 md:pt-2">
					Don&apos;t have an account? &nbsp;
					<Link to="/registration" className='link link-primary'>Register</Link>
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

export default Login;