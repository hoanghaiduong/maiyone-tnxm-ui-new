import React from 'react'

function Header() {
    const navs = [
        {
            id: 1,
            title: "Trang chủ",
            name: "home",
            slug: "/"
        },
        {
            id: 2,
            title: "Dịch vụ",
            name: "services",
            slug: "/services",
            isSub: true,
            sub: [
                {
                    id: 33,
                    title: "Dịch vụ hỗ trợ tận nhà",
                    name: "boyfriendCare",
                    slug: "/boy-friend-care",
                    isSub: false
                },
                {
                    id: 44,
                    title: "Dịch vụ hỗ trợ online",
                    name: "girlfriendCare",
                    slug: "/girl-friend-care",
                    isSub: false
                },
            
            ]
        },
        {
            id: 3,
            title: "Về chúng tôi",
            name: "about",
            slug: "/about"
        },
    ]
    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
            <nav
                className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
                aria-label="Global"
            >
                <div className="md:col-span-3">
                    {/* Logo */}
                    <a
                        className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                        href="../../templates/creative-agency/index.html"
                        aria-label="Preline"
                    >
                        TNXM
                    </a>
                    {/* End Logo */}
                </div>
                {/* Button Group */}
                <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none border-neutral-700 hover:bg-white/10  hover:opacity-50"
                    >
                        Đăng nhập
                    </button>
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-white hover:bg-lime-800 transition disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-lime-700"
                    >
                        Đăng Ký
                    </button>
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none text-black border-neutral-700 hover:bg-neutral-700"
                            data-hs-collapse="#navbar-collapse-with-animation"
                            aria-controls="navbar-collapse-with-animation"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                                <line x1={3} x2={21} y1={6} y2={6} />
                                <line x1={3} x2={21} y1={12} y2={12} />
                                <line x1={3} x2={21} y1={18} y2={18} />
                            </svg>
                            <svg
                                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* End Button Group */}
                {/* Collapse */}
                <div
                    id="navbar-collapse-with-animation"
                    className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
                >
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                        {navs.map((nav) => (
                            nav.sub ? (
                                <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:py-4">
                                    <button
                                        type="button"
                                        className="flex items-center text-dark hover:text-neutral-500 focus:outline-none focus:text-neutral-400"
                                    >
                                        {nav.title}
                                        <svg
                                            className="flex-shrink-0  size-3"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>

                                    {nav.sub && nav.isSub ?
                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-white md:shadow-md rounded-lg p-2 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5">
                                            {nav.sub.flatMap(x => (
                                                <a
                                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:opacity-50 font-medium focus:outline-none focus:text-neutral-300"
                                                    href={x.slug}
                                                >
                                                    {x.title}
                                                </a>
                                            ))}


                                        </div>
                                        : ""
                                    }



                                </div>


                            ) : (<>
                                <div>

                                    <a
                                        className="relative inline-block text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 text-black"
                                        href={nav.slug}
                                        aria-current="page"
                                    >
                                        {nav.title}
                                    </a>
                                </div>
                            </>)
                        ))}



                    </div>
                </div>
                {/* End Collapse */}
            </nav>
        </header>
    )
}

export default Header
