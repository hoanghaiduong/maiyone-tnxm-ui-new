import React, { useEffect, useState } from "react";
import { ToastAlert2 } from "../Toast";
import { axiosInstance } from "../../Common/axios-config";

function ClientSlide() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axiosInstance.get(
          "/providers?order=ASC&page=1&take=10"
        );
        console.log(result);
        setProviders(result.data.data || []);
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
      {/* Clients */}
      <div className="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
          {providers.map((x, id) => {
            return (
              <div
                key={id}
                className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-neutral-800"
              >
                <img src={`http://localhost:7774/${x.logo}`} alt="" />
              </div>
            );
          })}
        </div>
        {/* End Grid */}
      </div>
      {/* End Clients */}
    </>
  );
}

export default ClientSlide;
