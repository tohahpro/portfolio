import { RiMenuFill } from "react-icons/ri";
import { TbMenuDeep } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import { GoFileDirectory } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { useState } from "react";
import { GrGallery } from "react-icons/gr";


const DashboardV2 = () => {

    const menus = [
        // { name: 'Dashboard', link: '/', icon: <MdSpaceDashboard />, border: true },
        { name: 'User', link: '/dashboard/user', icon: <LuUser2 /> },
        { name: 'Analytics', link: '/dashboard/analytics', icon: <TbReportAnalytics /> },
        { name: 'Message', link: '/dashboard/message', icon: <LuMessageSquare />, margin: true },

        { name: 'Gallery', link: '/dashboard/gallery', icon: <GrGallery /> },
        { name: 'File Manager', link: '/dashboard/g', icon: <GoFileDirectory /> },
        { name: 'Cart', link: '/dashboard/g', icon: <AiOutlineShoppingCart />, margin: true },
        { name: 'Settings', link: '/dashboard/t', icon: <IoSettingsOutline /> },
        { name: 'Home', link: '/', icon: <GrHomeRounded /> },
    ]


    const [open, setOpen] = useState(true)

    return (
        <div className="flex gap-6">
            <div
                className={`${open ? 'w-44 md:w-56' : 'w-20'}
             bg-[#101A33]  
             duration-500
             min-h-screen  
              text-gray-200`}>
                <div
                    onClick={() => setOpen(!open)}
                    className="
               pt-4 px-7 flex justify-end">
                    {
                        open ?
                            <TbMenuDeep
                                size={24}
                                className={`cursor-pointer`}
                            />
                            :
                            <RiMenuFill
                                size={22}
                                className={`cursor-pointer`} />
                    }
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    <div className="group flex items-center font-medium p-2 border-b-2 border-gray-500">

                        <div className="px-5 text-2xl"><MdSpaceDashboard /></div>
                        <h2 style={{
                            transitionDelay: `300ms`
                        }}
                            className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>Dashboard</h2>
                        <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-sm drop-shadow-2xl w-0 overflow-hidden group-hover:px-4 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                            Dashboard
                        </h2>
                    </div>
                    {
                        menus?.map((menu, idx) =>
                            <div key={idx}>
                                <NavLink
                                    to={menu?.link}
                                    className={({ isActive }) =>
                                        isActive ? `${menu?.margin && 'mb-8'} ${menu?.border && 'border-b-2 border-gray-500 rounded-none'} group flex items-center font-medium p-2 bg-[#5764838c] rounded-md `
                                            :
                                            `${menu?.margin && 'mb-8'} ${menu?.border && 'border-b-2 border-gray-500 rounded-none'} group flex items-center font-medium p-2`
                                    }
                                >
                                    <div className="px-5 text-xl md:text-2xl">{menu?.icon}</div>
                                    <h2 style={{
                                        transitionDelay: `${idx + 3}00ms`
                                    }}
                                        className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}</h2>
                                    <h2 className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-sm drop-shadow-2xl w-0 overflow-hidden group-hover:px-4 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                        {menu?.name}
                                    </h2>
                                </NavLink>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    );
};
export default DashboardV2;