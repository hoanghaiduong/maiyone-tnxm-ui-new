import React from 'react'

function BannerTop() {
  return (
    <>
    {/* Announcement Banner */}
    <div className="bg-white/60 backdrop-blur-lg dark:bg-neutral-900/60">
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid justify-center sm:grid-cols-2 sm:items-center gap-4">
          <div className="flex items-center gap-x-3 md:gap-x-5">
            <svg
              className="shrink-0 size-10 md:size-14"
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width={40}
                height={40}
                rx={6}
                fill="currentColor"
                className="fill-blue-600"
              />
              <path
                d="M8 32.5V19.5C8 12.8726 13.3726 7.5 20 7.5C26.6274 7.5 32 12.8726 32 19.5C32 26.1274 26.6274 31.5 20 31.5H19"
                stroke="white"
                strokeWidth={2}
              />
              <path
                d="M12 32.5V19.66C12 15.1534 15.5817 11.5 20 11.5C24.4183 11.5 28 15.1534 28 19.66C28 24.1666 24.4183 27.82 20 27.82H19"
                stroke="white"
                strokeWidth={2}
              />
              <circle cx={20} cy="19.5214" r={5} fill="white" />
            </svg>
            <div className="grow">
              <p className="md:text-xl text-gray-800 font-semibold dark:text-neutral-200">
                Chuyên cung ứng chuỗi dịch vụ
              </p>
              <p className="text-sm md:text-base text-gray-800 dark:text-neutral-200">
                Nhận nhiều ưu đãi tại đây , ngay bây giờ
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="text-center sm:text-start flex sm:justify-end sm:items-center gap-x-3 md:gap-x-4">
            <a
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
            Tham gia
            </a>
            <a
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300 dark:focus:text-neutral-300 dark:focus:border-neutral-300"
              href="#"
            >
              Nhận thông tin tại đây
            </a>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
    {/* End Announcement Banner */}
  </>
  
  )
}

export default BannerTop