import React, { useEffect, useState } from "react";
import { ToastAlert2 } from "../Toast";
import { axiosInstance } from "../../Common/axios-config";
import { Link } from "react-router-dom";
import '../../Common/css/style.css'
function HomeServices() {
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
  return (
    <>
      {/* Works */}
      <div className="max-w-7xl px-4 lg:px-6 lg:px-8 py-12 lg:py-12 mx-auto">
        <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
          <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
            Các dịch vụ được ưa chuộng
          </h1>
        </div>
        {/* Card Grid */}
        <div className=" grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {servicesData.map((x, id) => {
            {
              return (
                <Link key={id} className="group block" to={`service/${x.path}`}>
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                    <img
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                      src={`http://localhost:7774/${x.thumbnail}`}
                      alt="Image Description"
                      id="service-popular"
                    />
                  </div>
                  <div className="pt-4">
                    <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                      {x.name}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                    {x.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                        Discovery
                      </span>
                      <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                        Brand Guidelines
                      </span>
                      <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                        Yoga
                      </span>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default HomeServices;
