import React from 'react'

function Floating() {
  return (
    <div className="fixed bottom-2 sm:bottom-4 end-2 sm:end-4 ms-2 z-[70] bg-neutral-900 border border-neutral-800 rounded-lg bg-neutral-800">
    {/* Button Group */}
    <div className="flex items-center gap-px">
      <p className="inline-flex gap-x-2 text-xs text-white py-1 px-2 relative before:absolute before:top-1/2 before:-start-0.5 before:z-10 before:w-px before:h-4 before:bg-white/20 before:-translate-y-1/2 first:before:hidden">
        <svg
          className="flex-shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        This is the Preline UI template preview mode.
      </p>
      {/* Templates Dropdown */}
      <div className="hs-dropdown relative inline-flex [--strategy:absolute] [--placement:bottom-right] before:absolute before:top-1/2 before:-start-px before:z-10 before:w-px before:h-4 before:bg-white/20 before:-translate-y-1/2 first:before:hidden">
        <button
          type="button"
          className="hs-dropdown-toggle py-2.5 sm:py-1.5 px-2 inline-flex justify-center items-center gap-x-2 text-xs rounded-e-lg border border-transparent bg-neutral-900 text-white hover:bg-neutral-950 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-900 bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700"
        >
          Templates
          <svg
            className="hs-dropdown-open:rotate-180 flex-shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
        {/* Dropdown */}
        <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 border border-neutral-800 bg-neutral-900 rounded-lg shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] bg-neutral-800 shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)]">
          <div className="p-1 space-y-0.5">
            <span className="block p-2 pb-1 text-[11px] uppercase text-gray-400 text-neutral-400">
              Main Pages
            </span>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 "
              href="../../index.html"
            >
              Preline UI
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 "
              href="../../docs/index.html"
            >
              Components (570+)
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 "
              href="../../examples.html"
            >
              Examples (185+)
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 "
              href="../../templates.html"
            >
              Templates (2)
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 "
              href="../../plugins.html"
            >
              Plugins (19)
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 "
              href="../../figma.html"
            >
              Figma
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 "
              href="../../pro/index.html"
            >
              Preline Pro
              <svg
                className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <div className="border-b border-gray-800 border-neutral-700 pt-1" />
            <span className="block p-2 pb-1 text-[11px] uppercase text-gray-400 text-neutral-400">
              Template Previews
            </span>
            <div className="space-y-0.5 max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 "
                href="../../templates/agency/index.html"
              >
                Agency
                <svg
                  className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                className="group flex items-center gap-x-1.5 py-1.5 px-2 rounded-md text-[13px] text-gray-200 hover:bg-neutral-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-neutral-800 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 active-link bg-neutral-800 bg-neutral-700"
                href="../../templates/creative-agency/index.html"
              >
                Creative Agency
                <svg
                  className="flex-shrink-0 size-3.5 ms-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* End Dropdown */}
      </div>
      {/* End Templates Dropdown */}
    </div>
    {/* End Button Group */}
  </div>
  )
}

export default Floating
