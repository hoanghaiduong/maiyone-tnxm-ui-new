import React from "react";
import { Outlet } from "react-router-dom";
import Navbars from "../Components/Navbars";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

function AuthLayout() {
  return (
    <>
      <div className="max-w-lg px-4 lg:px-6 lg:px-8 py-8 lg:py-12 mx-auto">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
          <div className="p-4 sm:p-7">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
