import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash, FaTwitter, FaYahoo } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { useTitle } from '../../../hooks/useTitle';
import Loader from '../../shared/Loader/Loader';

const Login = () => {

	useTitle("Login");

	const { loading, setLoading, logIn, signInWithGoogle, signInWithGitHub, signInWithFacebook, signInWithTwitter, signInWithYahoo } = useContext(AuthContext);

	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	
	const navigate = useNavigate();

	const location = useLocation();
	// console.log('login page location', location)
	const from = location.state?.from?.pathname || '/';

	// Show Loader when Page is Loading
	if (loading) {
		return <Loader></Loader>;
	}

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
				toast.error("Incorrect email and/or password!");
				setLoading(false);
			})
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
	
	const handleFacebookLogin = () => {
		signInWithFacebook()
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				toast.success("Successfully logged in using Facebook!");
				navigate(from, { replace: true })
				setLoading(false);
			})
			.catch(error => {
				setError(error.message);
				setLoading(false);
			})
	};
	
	const handleTwitterLogin = () => {
		signInWithTwitter()
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				toast.success("Successfully logged in using Twitter!");
				navigate(from, { replace: true })
				setLoading(false);
			})
			.catch(error => {
				setError(error.message);
				setLoading(false);
			})
	};
	
	const handleYahooLogin = () => {
		signInWithYahoo()
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				toast.success("Successfully logged in using Yahoo!");
				navigate(from, { replace: true })
				setLoading(false);
			})
			.catch(error => {
				setError(error.message);
				setLoading(false);
			})
	};

	// Show/Hide Password
	const handleShowPassword = (event) => {
		event.preventDefault();
		setShowPassword(!showPassword);
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
						
						<div className="text-md">
							Forgot your password? &nbsp;
							<Link to="/password-reset" className='link link-error'>Reset Password</Link>
						</div>

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

				<div className="flex-1 p-4 md:pb-2">
					<h4 className='mb-2 text-slate-500 text-xl font-bold text-center'> ----------- OR ----------- </h4>
					<h4 className='text-slate-700 text-xl font-bold text-center'>Login with</h4>
				</div>
				
				<div className="grid md:grid-cols-2 gap-2 !px-6 md:!px-8 !pt-3 card-body">
					<div className="form-control">
						<button onClick={handleGoogleLogin} className="btn btn-outline btn-accent text-lg">
							<FaGoogle className="mr-2" /> Google
						</button>
					</div>
					<div className="form-control">
						<button onClick={handleGitHubLogin} className="btn btn-outline btn-base text-lg">
							<FaGithub className="mr-2" /> GitHub
						</button>
					</div>
					<div className="form-control">
						<button onClick={handleTwitterLogin} className="btn btn-outline btn-primary text-lg">
							<FaTwitter className="mr-2" /> Twitter
						</button>
					</div>
					<div className="form-control">
						<button onClick={handleFacebookLogin} className="btn btn-outline btn-info text-lg">
							<FaFacebook className="mr-2" /> Facebook
						</button>
					</div>
					<div className="form-control mb-5">
						<button onClick={handleYahooLogin} className="btn btn-outline btn-warning text-lg">
							<FaYahoo className="mr-2" /> Yahoo
						</button>
					</div>
				</div>
				
			</div>
		</section>
	);
};

export default Login;