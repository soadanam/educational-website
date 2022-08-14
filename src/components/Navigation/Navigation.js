import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logo from '../../images/logo.png';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faSearchLocation } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {

    let activeStyle = {
        // textDecoration: 'underline',
        color: 'red',
        // backgroundColor: 'white',
    };

    const element = <FontAwesomeIcon icon={faSearch} />
    const element2 = <FontAwesomeIcon icon={faSearchLocation} />

    return (

        <nav className='nav-list'>

            <div className='container nav-container'>

                <div className='nav-menu'>
                    <a href='aa'>
                        <img src={logo} alt='Logo!' className='logo responsive'></img>
                    </a>

                    <NavLink className='nav-item' to='/home/' style={({ isActive }) => isActive ? activeStyle : undefined}> Home </NavLink>
                    <NavLink className='nav-item' to='/topCourses' style={({ isActive }) => isActive ? activeStyle : undefined}> Top Courses </NavLink>
                    <NavLink className='nav-item' to='/home/services/' style={({ isActive }) => isActive ? activeStyle : undefined}>  Services</NavLink>
                    <NavLink className='nav-item' to='/about' style={({ isActive }) => isActive ? activeStyle : undefined}> About </NavLink>
                    <NavLink className='nav-item' to='/contact' style={({ isActive }) => isActive ? activeStyle : undefined}> Contact Us</NavLink>
                    
                    <Button className='login-button' variant='outlined'>LOGIN</Button>
                </div>

                <div className='top-search-section'>
                    <div className='input-group'>
                        <input className='form-control footer-input' type="email" name="email" placeholder='SEARCH' />
                        <button className='btn btn-outline-secondary search-icon'>
                            {element} </button>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navigation;