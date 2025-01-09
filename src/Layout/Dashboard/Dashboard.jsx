import React from "react";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";
import useCart from "../../hook/useCart";
import { FaUtensilSpoon } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import useAdmin from "../../hook/useAdmin";




const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 bg-orange-400 min-h-screen p-5">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/AdminHome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensilSpoon></FaUtensilSpoon>Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mybookings">
                  <FaList></FaList> My Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>user Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FiShoppingCart></FiShoppingCart>My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <FaList></FaList> My Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">
                  <FaAd></FaAd>Add a review
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch></FaSearch>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdContactPhone></MdContactPhone>
              Contact
            </NavLink>
          </li>
        </ul>

      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
