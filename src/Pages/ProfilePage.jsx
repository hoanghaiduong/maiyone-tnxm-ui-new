import React from "react";

function ProfilePage() {
  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
       
        
          {/* Card */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="h-64 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
              <svg
                className="size-28"
                width={56}
                height={56}
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={56} height={56} rx={10} fill="white" />
                <g clipPath="url(#clip0_2204_541)">
                  <path
                    d="M37.0409 28.8697C33.1968 28.8697 30.0811 31.9854 30.0811 35.8288C30.0811 39.6726 33.1968 42.789 37.0409 42.789C40.8843 42.789 44 39.6726 44 35.8288C44 31.9854 40.8843 28.8697 37.0409 28.8697ZM18.9594 28.8701C15.116 28.8704 12 31.9854 12 35.8292C12 39.6726 15.116 42.7886 18.9594 42.7886C22.8032 42.7886 25.9192 39.6726 25.9192 35.8292C25.9192 31.9854 22.8032 28.8701 18.9591 28.8701H18.9594ZM34.9595 20.1704C34.9595 24.0138 31.8438 27.1305 28.0004 27.1305C24.1563 27.1305 21.0406 24.0138 21.0406 20.1704C21.0406 16.3269 24.1563 13.2109 28.0003 13.2109C31.8438 13.2109 34.9591 16.3269 34.9591 20.1704H34.9595Z"
                    fill="url(#paint0_radial_2204_541)"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_2204_541"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.0043 29.3944) scale(21.216 19.6102)"
                  >
                    <stop offset="0%" stopColor="#FFB900" />
                    <stop offset="0.6" stopColor="#F95D8F" />
                    <stop offset="0.999" stopColor="#F95353" />
                  </radialGradient>
                  <clipPath id="clip0_2204_541">
                    <rect
                      width={32}
                      height="29.5808"
                      fill="white"
                      transform="translate(12 13.2096)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark:text-rose-500">
                Asana API
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                Asana
              </h3>
              <p className="mt-3 text-gray-500 dark:text-neutral-500">
                Track tasks and projects, use agile boards, measure progress.
              </p>
            </div>
          
          </div>
          {/* End Card */}
        
      
      </div>
      {/* End Card Blog */}
    </>
  );
}

export default ProfilePage;
