import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useTitle } from '../../../hooks/useTitle';
import { toast } from 'react-toastify';

const Profile = () => {

  useTitle("Profile");

  const { user } = useContext(AuthContext);

  const currentUserName = user?.displayName;
  const currentUserPhotoURL = user?.photoURL;
  const currentUserEmail = user?.email;

  // const navigate = useNavigate();

  const { setLoading, resetPassword } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const [emailError, setEmailError] = useState("");

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    // const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    setSuccess("");
    setError("");
    // setEmailError("");

    // if (email.length < 1) {
    //   setError("You must enter a valid email address to reset your password!");
    //   setEmailError("Email field can not be empty!");
    //   return;
    // }

    // const updateUserData = (currentUser, name, photoURL) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photoURL
      }).then(() => {
        console.log("Profile updated!");
        setSuccess("Profile updated!");
        toast.success("Profile updated!");
        setLoading(false);
        // form.reset();
      }).catch((error) => {
        setError(error.message);
        toast.error("Something went wrong!");
        setLoading(false);
      });
    // };

  };

  return (
    <section className="max-w-lg mx-auto mt-4 lg:mt-20 p-4">
      <div className="flex card card-compact w-full bg-base-100 shadow-2xl">

        <div className="flex-1 p-6 md:p-8 pt-5 pb-1 md:pb-2">
          <h3 className='text-slate-700 text-2xl my-2 font-bold text-center'>Profile</h3>
        </div>

        <div className="mx-auto my-2 w-24 rounded-full ring-2 ring-offset-2 ring-slate-400">
          <img className='rounded-full object-top' src={currentUserPhotoURL} alt={currentUserName} />
        </div>
        <div className="flex-1 mt-2">
          <h4 className='text-slate-700 text-xl my-2 font-bold text-center'>{currentUserName}</h4>
          <p className='text-slate-700 text-lg mt-2 mb-3 font-bold text-center'>{currentUserEmail}</p>
        </div>

        <div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div>

        <p className="!px-6 md:!px-8 text-green-600 mt-2 text-center">{success}</p>
        <p className="!px-6 md:!px-8 text-red-500 mt-2 text-center">{error}</p>

        <form onSubmit={handleProfileUpdate}>
          <div className="!px-6 md:!px-8 !pt-2 card-body">
            <div className="form-control">
              <label className="label pl-0" htmlFor="name">
                <span className="label-text text-lg">Name</span>
              </label>
              <input type="text" id="name" name="name" placeholder="Enter your name" className="input input-bordered" />
              <p className="text-red-500 mt-2"></p>
            </div>
            <div className="form-control">
              <label className="label pl-0" htmlFor="photoURL">
                <span className="label-text text-lg">Photo URL</span>
              </label>
              <input type="text" id="photoURL" name="photoURL" placeholder="Enter your photo url" className="input input-bordered" />
              <p className="text-red-500 mt-2"></p>
            </div>
            <div className="form-control mt-4">
              <button className="btn text-lg" type="submit">Update</button>
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

export default Profile;