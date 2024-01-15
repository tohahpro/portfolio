import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
// import Navbar1 from "../Navbar/Navbar1";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            {/* <Navbar1 /> */}
            <Outlet />

        </div>
    );
};

export default MainLayout;