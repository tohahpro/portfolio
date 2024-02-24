import { Link, NavLink } from "react-router-dom";
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import { useState } from "react";




const Navbar = () => {

    const [open, setOpen] = useState(false)




    return (
        <div>
            <nav className=" left-0 right-0 z-[2]           
                        fixed items-center justify-between lg:top-0 lg:left-0 lg:w-full lg:z-[10]  lg:px-56 shadow-md bg-white/90 py-3">


                <div className="flex items-center justify-between">
                    <Link to='/'>
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg lg:text-2xl font-bold text-[#2b2868] flex items-center"><span className="text-[#96AE00]">
                                T</span>H</h2>
                        </div>
                    </Link>


                    <div className="lg:hidden justify-end text-2xl pr-2 text-slate-400" onClick={() => setOpen(!open)}>
                        {
                            open === true ? <BiMenuAltRight></BiMenuAltRight> : <BiMenu></BiMenu>
                        }
                    </div>

                    <div
                        className={`
                        absolute lg:flex flex-wrap mt-60 lg:m-0 w-full lg:w-fit p-6 lg:p-0 bg-white/90 border lg:border-none  duration-4000 ${open ? ' ' : 'hidden'} lg:static text-[#2b2868] lg:bg-transparent text-center  space-y-2 z-20`}
                    >
                        <ul className="lg:flex lg:gap-12 items-center  z-70 text-lg font-semibold">

                            <li>
                                <a href="/#"
                                >Home</a>
                            </li>
                            <li>
                                <a href="/#about-me"
                                > About Me</a>
                            </li>
                            <li>
                                <a href="/#skills"
                                >My Skills</a>
                            </li>
                            <li>
                                <a href="/#projects"
                                >My Projects</a>
                            </li>

                            <li>
                                <NavLink
                                    to="/dashboard/user"
                                    className={({ isActive }) =>
                                        isActive ? 'text-lg font-semibold' : ''
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>

                        </ul>



                    </div>
                </div>

            </nav >

        </div >
    );
};

export default Navbar;