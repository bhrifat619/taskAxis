import React from "react";

import { Link } from "react-router";
import LottieView from "./LottieView";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div>
          <LottieView />
        </div>
        <div className="text-center">
        
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-5 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-[#8504a0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#8504a0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              Go back home
            </Link>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;