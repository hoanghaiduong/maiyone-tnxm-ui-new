import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Floating from "../Components/Floating";
import HeaderSlide from "../Components/HeaderSlide/HeaderSlide";
import ClientSlide from "../Components/HeaderSlide/ClientSlide";
import { services } from "../Common/constants";
import Navbars from "../Components/Navbars";
import BannerTop from "../Components/BannerTop";
import HomeLayout from "../Layouts/HomeLayout";
import HomeNews from "../Components/Home/HomeNews";
import HomeServices from "../Components/Home/HomeServices";
import HomeVideoReview from "../Components/Home/HomeVideoReview";
import VerticalTab from "../Components/Home/VerticalTab";
import CkEditorComponent from "../Components/CKEditorComponent";


function HomePage() {
  return (
    <>
    
      <BannerTop />
    
      <HeaderSlide />
    

      <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-8 lg:py-12 mx-auto">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
          <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
            Các nhà cung cấp dịch vụ
          </h1>
        </div>
        {/* Clients */}
        <ClientSlide />
        {/* End Clients */}
      </div>

      <HomeServices />

      {/* End Works */}

      <HomeNews />
      {/* Testimonials */}
      <VerticalTab />
      {/*End Testimonials */}
      {/* Video Review */}
      <HomeVideoReview />
      {/* End Video Review */}

      {/* End Testimonials */}
    </>
  );
}

export default HomePage;
