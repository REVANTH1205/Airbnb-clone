import React from 'react'
import './Header.css';
import logo from './img/airlogo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import  PersonIcon  from '@mui/material/Avatar';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} className="header_icon" alt="logo" />
      </Link>
        <div className='header_center'>
            < input type="text" />
            <SearchIcon/>
        </div>
        <div className='header_right'>
            <p>Become a Host</p>
            <LanguageIcon />
            <ExpandMoreIcon  />
            <PersonIcon />
            

        </div>
    </div>

  )
}

export default Header
