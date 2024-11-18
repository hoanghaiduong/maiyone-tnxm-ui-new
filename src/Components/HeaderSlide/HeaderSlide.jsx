import React, { useEffect, useState } from "react";
import { services } from "../../Common/constants";
import { axiosInstance } from "../../Common/axios-config";
import { ToastAlert2 } from "../Toast";
import Slider from "react-slick";
import './css/headerSlide.css';
function HeaderSlide() {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axiosInstance.get(
          "/services?order=ASC&page=1&take=10"
        );
        console.log(result);
        setServicesData(result.data.data || []);
      } catch (error) {
        ToastAlert2.fire("Error", error.message, "error");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // if (loading) {
  //     return <div>Loading...</div>;
  // }
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="px-4 lg:px-10 py-2">
        <div className="slider-container  rounded-3xl bg-white shadow-2xl dark:bg-neutral-800">
          <Slider {...settings}>
            {servicesData.map((slide, id) => {
              return (
                <div
                  className="outline-none h-100vh"
                  style={{
                   width:'50% !important',
                  }}
                  key={id}
                >
                  <img
                    src={`http://localhost:7774/${slide.thumbnail}`}
                    className="w-screen h-screen object-contain"
                    alt=""
                  />
      
                  <div class="hs-carousel-body absolute top-3/4 left-8 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 bg-transparent">
                    <h1>kaka</h1>
                  </div> 
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {/* End Slider */}
    </>
  );
}

export default HeaderSlide;
