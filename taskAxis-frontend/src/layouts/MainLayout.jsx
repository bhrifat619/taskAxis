import React from "react";
import {Outlet, useNavigation} from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
const MainLayout = () => {
  const navigate = useNavigation();
  const isNavigating = Boolean(navigate.location);
  return (
    <div className="text-base-content">
      <header className="px-4">
        <Header />
      </header>
      <main className="pt-5 pb-10 min-h-[calc(100vh-318px)] px-4 md:w-11/12 mx-auto ">
      {
        isNavigating && <Spinner/>
      }
        <Outlet />
      </main>

      <footer className="bg-base-300 text-base-content ">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
