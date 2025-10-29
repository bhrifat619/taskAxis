import React, {useContext, useEffect, useState} from "react";
import logo from "../assets/logo.png";
import {Link, NavLink} from "react-router";
import {IoMdClose} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";
import {AuthContext} from "../provider/Contexts";
import {FaHandLizard} from "react-icons/fa";
import Swal from "sweetalert2";
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const {user, logoutUser} = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", `${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logoutUser().then(() => {
      Swal.fire({
        title: "Logout Successfully",
        icon: "success",
        draggable: true,
      });
    });
  };

  return (
    <div className="relative  md:w-11/12 mx-auto">
      <div className="bg-base-300  px-2 lg:px-6 py-3 flex items-center justify-between mt-4 border rounded-lg border-accent shadow ">
        <div>
          <Link
            className="flex gap-1 items-center text-2xl md:text-3xl font-heading font-medium "
            to="/"
          >
            <img className="w-14" src={logo} alt="" />
            <h3 className="font-heading">TaskAxis</h3>
          </Link>
        </div>
        <nav className="hidden md:block flex-1">
          <ul className="flex items-center justify-center gap-5">
            <li>
              <NavLink
                to="/"
                className={({isActive}) =>
                  `  py-2 px-1 border-b-2  hover:text-secondary  transition-all font-medium ${
                    isActive
                      ? "text-secondary border-secondary "
                      : " border-transparent"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addTasks"
                className={({isActive}) =>
                  `  py-2 px-1 border-b-2  hover:text-secondary  transition-all font-medium ${
                    isActive
                      ? "text-secondary border-secondary "
                      : "border-transparent"
                  }`
                }
              >
                Add Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browseTasks"
                className={({isActive}) =>
                  `  py-2 px-1 border-b-2  hover:text-secondary  transition-all font-medium ${
                    isActive
                      ? "text-secondary border-secondary "
                      : " border-transparent"
                  }`
                }
              >
                Browse Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myPostedTasks"
                className={({isActive}) =>
                  `  py-2 px-1 border-b-2  hover:text-secondary  transition-all font-medium ${
                    isActive
                      ? "text-secondary border-secondary "
                      : " border-transparent"
                  }`
                }
              >
                My Posted Tasks
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5 items-center">
          <label className="flex items-center cursor-pointer gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
              className="toggle theme-controller "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
          {!user && (
            <div className="hidden md:flex items-center gap-4">
              <Link to="/auth/login">
                <button className="btn btn-secondary text-lg">Login</button>
              </Link>

              <Link to="/auth/signUp">
                <button className="btn btn-secondary text-lg btn-outline">
                  Sign Up
                </button>
              </Link>
            </div>
          )}

          {/* Profile Picture */}
          {user && (
            <div className={`hidden md:block relative group z-10`}>
              {/* Avatar with tooltip */}
              <div className="avatar cursor-pointer">
                <div className="ring-secondary   border-none w-10 md:w-12 rounded-full ring-3 ">
                  <img
                    className="object-top rounded-full "
                    src={user?.photoURL}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"; 
                    }}
                  />
                </div>
              </div>
              {/* Tooltip on hover */}
              <div className="absolute -left-9 rounded-md top-17 bg-base-300 text-base-content px-4 py-4  opacity-0 group-hover:opacity-100 text-center space-y-2  w-auto shadow min-w-30">
                <h1 className="whitespace-nowrap break-keep font-medium">
                  {user.displayName ? user.displayName : "Quest"}
                </h1>
                <button
                  onClick={handleLogout}
                  type="button"
                  className="btn btn-sm btn-secondary block w-full"
                >
                  Log Out
                </button>
              </div>
            </div>
          )}

          <div className="flex md:hidden  items-center  text-3xl cursor-pointer gap-5">
            <button
              className="cursor-pointer btn text-xl shadow-none btn-secondary text-white "
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <nav
        className={`${
          showMobileMenu ? "left-0" : "-left-90 opacity-0 pointer-events-none"
        } 
        border border-accent rounded-lg
        z-10
        top-21 
        w-[calc(100%-22px)]
      duration-500 
       mx-auto right-0
   
       py-4 pb-6 bg-base-300 absolute `}
      >
        <ul
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="flex flex-col text-left gap-2 "
        >
          <li className="flex gap-2 items-center text-lg  py-3 cursor-pointer px-4    transition-all font-medium hover:bg-accent">
            <div className="avatar cursor-pointer">
              <div className="ring-secondary   border-none w-10 md:w-12 rounded-full ring-3  ">
                <img className=" rounded-full" src={user?.photoURL} />
              </div>
            </div>
            My Profile
          </li>
          <li>
            <NavLink
              to="/"
              className={`text-lg  py-2 px-4    transition-all  block font-medium hover:bg-accent`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addTasks"
              className={`text-lg  py-2 px-4    transition-all  block font-medium hover:bg-accent`}
            >
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browseTasks"
              className={`text-lg  py-2 px-4    transition-all  block font-medium hover:bg-accent`}
            >
              Browse Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myPostedTasks"
              className={`text-lg  py-2 px-4    transition-all  block font-medium hover:bg-accent`}
            >
              My Posted Tasks
            </NavLink>
          </li>
          {!user ? (
            <>
              <li className="px-4">
                <Link to="/auth/login">
                  <button className="btn btn-secondary text-lg">Login</button>
                </Link>
              </li>
              <li className="px-4 mt-2">
                <Link to="/auth/signUp">
                  <button className="btn btn-secondary text-lg btn-outline">
                    Sign Up
                  </button>
                </Link>
              </li>
            </>
          ) : (
            <div className="px-4">
              <button
                onClick={handleLogout}
                type="button"
                className="btn btn-md btn-secondary  "
              >
                Log Out
              </button>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
