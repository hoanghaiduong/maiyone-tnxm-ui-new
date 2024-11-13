import React from "react";
import { Outlet } from "react-router-dom";
import BannerTop from "../Components/BannerTop";
import Navbars from "../Components/Navbars";
import Footer from "../Components/Footer";
import Floating from "../Components/Floating";

function HomeLayout() {
  return (
    <>
    
      {/* ========== HEADER ========== */}
      <Navbars />
      {/* <Header /> */}
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" className="mt-2">
        <Outlet />
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== FOOTER ========== */}
      <Footer />
      {/* ========== END FOOTER ========== */}
      <Floating />
    </>
  );
}

export default HomeLayout;
