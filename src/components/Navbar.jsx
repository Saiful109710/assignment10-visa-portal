import React, { useContext, useEffect, useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import { toast } from 'react-hot-toast'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";



const Navbar = () => {

  const {user,handleLogOut,error,setError} = useContext(AuthContext)
  const [theme,setTheme] = useState(true)

  const handleLogoutBtn=()=>{
        handleLogOut()
        .then(res=>{
            toast.success("Successfully Logout")
        })
        .catch(err=>{
            toast.error(err.message)
        })
  }


const handleDarkMode=()=>{
      setTheme(!theme)
      document.querySelector('body').setAttribute('data-theme','dark')
}

const handleLightMode = ()=>{
  setTheme(!theme)
  document.querySelector('body').setAttribute('data-theme','light')
}





    const links = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/allVisa'>All Visas</NavLink></li>
                    <li><NavLink to='/addVisa'>Add Visa</NavLink></li>
                    <li><NavLink to='/myAddedVisa'>My Added Visa</NavLink></li>
                    <li><NavLink to='/myVisaApplication'>My Visa Application</NavLink></li>
                 
                    
                 </>
  return (
    <div className="navbar bg-base-100">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl hidden md:block">Visa Navigator Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-5">

    {
      theme ? (
        <button onClick={handleDarkMode} className='btn'><MdDarkMode></MdDarkMode></button>
      ):(
        <button className='btn' onClick={handleLightMode}><CiLight></CiLight></button>
      )
    }
      
      
      {
        user ? (
            <div className='relative'>
              <div className="avatar">
               <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 cursor-pointer">
                <img src={user.photoURL} />
              </div>
            </div>
                 <div className="absolute top-full left-0 mt-2 w-max bg-gray-700 text-white text-xs rounded-lg px-2 py-1 hidden group-hover:block">
                    {user.displayName}
                 </div>
            </div>
        ):(
          <>
            <Link to="/signin" className="text-white bg-orange-600  hover:bg-gray-700 btn">Login</Link>
            <Link to="/signup" className="text-white bg-orange-600 hover:bg-gray-700 px-3 btn">Register</Link>
          </>
        )
      }

      {
        user && (
          <button 
                onClick={handleLogoutBtn} 
                className="text-white bg-blue-500 hover:bg-gray-700 px-3 py-2 rounded-md"
            >
          Logout
      </button>
        )
      }
  </div>
</div>
  )
}

export default Navbar
