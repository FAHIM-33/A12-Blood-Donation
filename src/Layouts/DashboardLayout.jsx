import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar.jsx/Sidebar";

const DashboardLayout = () => {
    return (
        <section className="flex min-h-screen bg-background text-high">
            <div >
                <Sidebar></Sidebar>
            </div>
            <div className="flex-grow ">
                <Outlet></Outlet>
            </div>

        </section>
    );
};

export default DashboardLayout;