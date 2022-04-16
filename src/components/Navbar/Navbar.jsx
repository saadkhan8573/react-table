import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <ul>
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to="/user-form">User Form</NavLink> </li>
                <li> <NavLink to="/user-react-table">User Table</NavLink> </li>
                <li> <NavLink to="/login">Login</NavLink> </li>
            </ul>
        </div>
    </>
  )
}
