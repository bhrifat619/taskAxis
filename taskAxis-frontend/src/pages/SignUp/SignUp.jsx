import React, {useContext, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router";
import google from "../../assets/google.png";
import {AuthContext} from "../../provider/Contexts";
import {toast} from "react-toastify";
import Swal from "sweetalert2";
import logo from "../../assets/logo.png";
const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const {createUser,  updateUser, loginWithGoogle} =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {from} = location?.state || {};
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const {email, password, name, photo} = Object.fromEntries(formData);
    const profileData = {
      displayName: name,
      photoURL: photo,
    };
    if (!/.{6,}/.test(password)) {
      return toast.error("Password Must be 6 characters or longer");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password must contain at least one lowercase letter");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one uppercase letter");
    }
    createUser(email, password)
      .then(() => {
        updateUser(profileData).then(() => {
          Swal.fire({
            title: "User Created Successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
          navigate(from ? from : "/");
        });
    
      })
      .catch((error) => toast.error(error?.message));
  };
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Login Successfully",
          icon: "success",
          draggable: true,
        });
       
        navigate(from ? from : "/");
      })
      .catch((error) => toast.error(error?.message));
  };
  return (
    <div className="md:w-11/12 mx-auto px-4">
      <div className="  min-h-screen flex items-center justify-center md:gap-5 bg-base-300  rounded-2xl py-15 md:py-15 px-4 ">
        <div className="max-w-lg w-full bg-base-100 text-base-content rounded-xl shadow-lg p-8 border border-accent">
          <img className="w-14 mx-auto" src={logo} alt="" />
          <h2 className="text-2xl font-bold  mb-2 text-center mt-3 font-heading">
            Create an account
          </h2>
          <p className="text-center mb-6 text-base-200">
            Join TaskAxis to post tasks, find freelance jobs, and manage your work
            easily. It only takes a minute to get started!
          </p>
          <form onSubmit={handleSignup} className="space-y-4 pb-2">
            <div>
              <label className="block text-sm font-medium text-base-200 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-accent rounded-lg focus:ring-2 focus:ring-base-200 focus:border-base-200 outline-none transition-all"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-base-200 mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                required
                className="w-full px-4 py-2 border border-accent rounded-lg focus:ring-2 focus:ring-base-200 focus:border-base-200 outline-none transition-all"
                placeholder="Your Photo URL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-base-200 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-accent rounded-lg focus:ring-2 focus:ring-base-200 focus:border-base-200 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="relative pb-2">
              <label className="block text-sm font-medium text-base-200 mb-1">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="w-full px-4 py-2 border border-accent rounded-lg focus:ring-2 focus:ring-base-200 focus:border-base-200 outline-none transition-all"
                placeholder="••••••••"
                required
              />
              <button
                className="absolute right-5 text-xl text-base-200 top-8 cursor-pointer"
                type="button"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary cursor-pointer text-white font-medium py-2.5 rounded-2xl transition-colors mt-2"
            >
              Register
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-base-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-base-300"></div>
          </div>
          <div className="pb-2">
            <button
              type="button"
              onClick={handleLoginWithGoogle}
              className="w-full btn-primary text-base-content hover:text-white btn-outline btn cursor-pointer  font-medium py-6 rounded-2xl transition-colors mt-4"
            >
              <img className="w-6" src={google} alt="" />
              Login With Google
            </button>
          </div>
          <div className="mt-2 text-center text-sm text-base-200 flex gap-2 justify-center">
            <p>Already have an account? </p>
            <Link
              to="/auth/login"
              className="text-base-content border-b border-transparent hover:border-base-content font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
