import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            {/* <div className="h-16"></div> */}
            <Outlet></Outlet>
        </>
    );
};

export default MainLayout;