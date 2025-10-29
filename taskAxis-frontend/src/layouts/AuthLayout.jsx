import React from "react";

import {Outlet} from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";


const AuthLayout = () => {
  return (
    <div className="text-base-content">
      <header className="px-4">
        <Header />
      </header>
      <main className="pt-10 pb-10 px-4">
        <Outlet />
      </main>
      <footer className="bg-base-300 text-base-content ">
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
