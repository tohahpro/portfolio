
import DashboardV2 from "./DashboardV2";

import { Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <>
            <div className="flex z-30">
                <DashboardV2 />
                <div className="-z-30">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;