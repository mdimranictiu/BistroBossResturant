import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-64 bg-orange-400 min-h-screen p-5">
             <ul className='menu'>
              <li><NavLink to='/dashboard/userHome'><FaHome></FaHome>user Home</NavLink></li>
              <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> reservation</NavLink></li>
              <li><NavLink to='/dashboard/cart'><FiShoppingCart></FiShoppingCart>My Cart</NavLink></li>
              <li><NavLink to='/dashboard/booking'><FaList></FaList> My Booking</NavLink></li>
              <li><NavLink to='/dashboard/addReview' >
              <FaAd></FaAd>Add a review</NavLink></li>
             </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
