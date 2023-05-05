import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTitle } from '../../../hooks/useTitle';

const PasswordReset = () => {

  useTitle("Password Reset");

  const navigate = useNavigate();

  const { setLoading, resetPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [emailError, setEmailError] = useState("");


  const handlePasswordReset = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    setSuccess("");
    setError("");
    setEmailError("");

    if (email.length < 1) {
      setError("You must enter a valid email address to reset your password!");
      setEmailError("Email field can not be empty!");
      return;
    }

    resetPassword(email)
      .then(() => {
        setSuccess("Please check your email address to reset your password!");
        toast.success("Please check your email!");
        setLoading(false);
        form.reset();
        navigate("/login");
      })
      .catch(error => {
        setError(error.message);
        toast.error("Please enter correct email address to reset your password!");
        setLoading(false);
      })

  };

  return (
    <section className="max-w-lg mx-auto mt-4 lg:mt-20 p-4">
      <div className="flex card card-compact w-full bg-base-100 shadow-2xl">

        <div className="flex-1 p-6 md:p-8 pt-5 pb-1 md:pb-2">
          <h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Reset your Password</h3>
        </div>

        <div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div>

        <p className="!px-6 md:!px-8 text-green-600 mt-2 text-center">{success}</p>
        <p className="!px-6 md:!px-8 text-red-500 mt-2 text-center">{error}</p>

        <form onSubmit={handlePasswordReset}>
          <div className="!px-6 md:!px-8 !pt-2 card-body">
            <div className="form-control">
              <label className="label pl-0" htmlFor="email">
                <span className="label-text text-lg">Email</span>
              </label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" className={emailError ? "input input-error" : "input input-bordered"} />
              <p className="text-red-500 mt-2">{emailError}</p>
            </div>
            <div className="form-control mt-4">
              <button className="btn text-lg" type="submit">Reset Password</button>
            </div>
          </div>
        </form>
        <div className="p-6 md:p-8 !pb-8 pt-1 md:pt-2">
          Go Back to <Link to="/login" className='link link-primary'>Login</Link>
        </div>

      </div>
    </section>
  );
};

export default PasswordReset;