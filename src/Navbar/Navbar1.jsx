

const Navbar1 = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex justify-end flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">TH</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="lg:flex lg:gap-12 items-center  z-70 text-lg font-semibold">
                                <li>
                                    <a href="/#"
                                    >Home</a>
                                </li>
                                <li>
                                    <a href="/#Technical"
                                    >Technical</a>
                                </li>
                                <li>
                                    <a href="/#about-me">About Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    Content
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li>
                            <a href="/#"
                            >Home</a>
                        </li>
                        <li>
                            <a href="/#Technical"
                            >Technical</a>
                        </li>
                        <li>
                            <a href="/#about-me">About Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar1;