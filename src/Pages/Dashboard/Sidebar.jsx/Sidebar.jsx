import { FaHome, FaUsers } from 'react-icons/fa';
import { MdOutlineBloodtype } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';


const Sidebar = () => {
    const { user } = useContext(AuthContext)
    return (
        <section className='sticky top-0 left-0 sidebar w-max flex flex-col py-4 min-h-screen'>
            <NavLink to='/dashboard/profile'>
                <button>
                    <img className='w-8 h-8 object-cover rounded-full' src={user?.photoURL} /> 
                    Profile ({user?.displayName})
                </button>
            </NavLink>
            <NavLink to='/dashboard/home'>
                <button>
                    <FaHome className='text-xl'></FaHome>
                    Dashboard - Home
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
            <NavLink to='/'>
                <button>
                    <FaHome className='text-xl'></FaHome>
                    Home
                </button>
            </NavLink>

        </section>
    );
};

export default Sidebar;