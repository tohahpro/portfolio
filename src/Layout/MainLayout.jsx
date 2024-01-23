import { Outlet } from "react-router-dom";

import Navbar from "../Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Shared/Footer/Footer";
// import Navbar1 from "../Navbar/Navbar1";


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            {/* <Navbar1 /> */}
            <Outlet />
            <Footer />
            <Toaster />

        </div>
    );
};

export default MainLayout;