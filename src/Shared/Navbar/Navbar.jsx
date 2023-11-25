import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
  const { user,logOut } = useAuth();
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
             
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-semibold
       uppercase rounded-box text-[18px] w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        <li><NavLink to='/trainer'>Trainer</NavLink></li>       
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        
      </ul>
    </div>
          <img className='w-[80px]' src={logo} alt="" />
           
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu uppercase menu-horizontal px-1">
       <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        <li><NavLink to='/trainer'>Trainer</NavLink></li>       
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </ul>
  </div>
        <div className="navbar-end">
            {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <NavLink to='/login' className="btn bg-[#dc1853] text-white">Login</NavLink>
                    }
    
  </div>
</div>
    </div>
  );
};

export default Navbar;