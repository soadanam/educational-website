import React from 'react';
import './Top.css';

const Top = () => {
    return (
        <div className='top'>
            <div className="container top-container">
                <div className='top-address'>
                    <span className='pe-2 top-address-text'>
                        <i class="fa-solid fa-location-dot"></i> 2072 Pinnickinick Street, WA 98370
                    </span>
                    <i class="fa-solid fa-envelope"></i> <a href='aa'>info@website.com </a>
                </div>
                <div className='top-icons'>
                    <a href='#' className='top-icon'>
                        <i className="fa-brands fa-facebook-f"></i>
                    </a> <br />
                    <a href='#' className='top-icon'>
                        <i className="fa-brands fa-twitter"></i>
                    </a> <br />
                    <a href='#' className='top-icon'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a> <br />
                    <a href='#' className='top-icon'>
                        <i className="fa-brands fa-google-plus-g"></i>
                    </a> <br />
                </div>
            </div>
        </div>
    );
};

export default Top;