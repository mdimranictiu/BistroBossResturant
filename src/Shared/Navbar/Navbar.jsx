import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

import { AuthContext } from '../../components/Providers/AuthProvider';
import useAxiosSecure from '../../hook/useAxiosSecure';
import useCart from '../../hook/useCart';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const axiosSecure=useAxiosSecure()
  console.log(user)
  const handlelogOut=()=>{
    logOut()
  }
  const [cart]=useCart()
  // useEffect(()=>{
  //   axiosSecure.
  //   get('/carts')
  //   .then((res)=>
  //       console.log(res.data)
  //   )
  //   .catch((error)=>{
  //       console.log(error)
  //   })
  // },[])
    const links=<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Menu</Link></li>
    <li><Link to='/order'>Order</Link></li>
  <Link to='/dashboard/cart'>
  <li>
    <button className="btn">
    <FiShoppingCart></FiShoppingCart>
  <div className="badge badge-secondary">{cart.length}</div>
</button>
    </li></Link>
    {
      user? <>
      <li><Link onClick={handlelogOut} >Logout</Link></li>
      <li>{user.email}</li>
      </>:<>
      <li><Link to='/login'>Login</Link></li>
      </>
    }
   

    
    
    </>
    return (
        <>
        <div className="navbar max-w-screen-xl bg-black text-white z-10 bg-opacity-30 fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss Resturaent</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>

</div>
        </>
    );
};

export default Navbar;