import { FaHome, FaUsers } from 'react-icons/fa';
import { MdOutlineBloodtype } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <section className='sidebar w-max flex flex-col py-4 min-h-screen'>
            <NavLink to='/dashboard/home'>
                <button>
                    <FaHome className='text-xl'></FaHome>
                    Home
                </button>
            </NavLink>
            <br />
            <NavLink to='/dashboard/create-donation-request'>
                <button>
                    <MdOutlineBloodtype className='text-2xl'></MdOutlineBloodtype>
                    Create Donation Request</button>
            </NavLink>
            <br />
            <NavLink to='/dashboard/all-users'>
                <button>
                    <FaUsers className='text-2xl'></FaUsers> 
                    All Users</button>
            </NavLink>
            <br />
            <NavLink to='/dashboard/my-donation-request'>
                <button>
                    <BiSolidDonateBlood className='text-2xl'></BiSolidDonateBlood> 
                    My donation request</button>
            </NavLink>
            <br />

        </section>
    );
};

export default Sidebar;