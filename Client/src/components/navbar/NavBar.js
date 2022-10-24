import React from 'react'
import './NavBar.css'
import { GoThreeBars } from 'react-icons/go';
import {Link} from 'react-router-dom'

export const NavBar = () => {

  const handleToggle = () => {
    const navbarLinks = document.getElementsByClassName('links')[0]
    navbarLinks.classList.toggle('active')
  }

  return (
    <nav>
        <p className='brandName'>Brand Name</p>
        <div className="menuicon" onClick={handleToggle}><GoThreeBars fontSize="1.3em"/></div>
        <div className='links'>
          <Link to="/stock-report">Report</Link>
          <Link to="/stock-entry">Entry</Link>
          <Link to="/stock-out">Out</Link>
          <Link to="/stock-history">History</Link>
          <Link to="/permissions">Permissions</Link>
          <Link to="/signin">Signin</Link>
        </div>
    </nav>
  )
}
