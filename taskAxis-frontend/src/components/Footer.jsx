import React from "react";
import logo from "../assets/logo.png";
import {Link} from "react-router";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLocationArrow,
  FaPhoneVolume,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="md:w-11/12 mx-auto  footer md:gap-x-18 sm:footer-horizontal px-6 py-10 ">
      <div>
        <div>
          <Link
            className="flex gap-2 items-center text-3xl font-semibold font-heading "
            to="/"
          >
            <img className="w-12" src={logo} alt="" />
            <h3>TaskAxis</h3>
          </Link>
        </div>

        <p className="opacity-60">
          TaskAxis — Where Freelancers <br /> Get It Done
        </p>
      </div>
      <div>
        <h6 className="footer-title">Important Links</h6>
        <a className="link link-hover">Terms & Conditons</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Developer Resources</a>
      </div>

      <nav className="grow">
        <h6 className="footer-title ">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Tasks</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="space-y-3">
        <h6 className="footer-title">Contact</h6>
        <div className="space-y-3 mt-2">
          <p className=" items-center underline-offset-0  flex gap-2">
            <FaEnvelope size={25} /> support@taskaxis.com
          </p>
          <p className="items-center underline-offset-0  flex gap-2">
            <FaPhoneVolume size={25} />
            +8801234678901
          </p>
          <p className="items-center underline-offset-0  flex gap-2">
            <FaLocationArrow size={23} />
            Dhaka,Bangladesh
          </p>
        </div>
        <div className="flex gap-4">
          <a target="_blank" href="https://www.facebook.com">
            <FaFacebook size={28} />
          </a>
          <a target="_blank" href="https://www.instagram.com">
            <FaInstagram size={28} />
          </a>
          <a target="_blank" href="https://www.github.com">
            <FaGithub size={28} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
