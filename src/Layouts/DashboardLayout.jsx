import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar.jsx/Sidebar";

const DashboardLayout = () => {
    return (
        <section className="flex min-h-screen bg-background text-high">
            <div className="">
                <Sidebar></Sidebar>
            </div>
            <div className="flex-grow max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </div>

        </section>
    );
};

export default DashboardLayout;