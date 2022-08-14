import React from 'react';
import './ContactUs.css';
import photo from '../../images/background/contact4.jpeg';

const ContactUs = () => {
    return (
        <div>
            <p className='text-danger bg-warning'>Contact US!</p>

            <div className='container'>
                <div className='card' style={{ backgroundColor: "lightblue" }}>
                    <img src={photo} alt='Logo!' className=''></img>
                    <div class="card-body contact">
                        <h5 class="card-title">Contact Us:</h5>
                        <p class="card-text">(248) 896-2084
                            3336 Buss Dr
                            Walled Lake, Michigan(MI), 48390</p>
                            <p>randomemail@gmail.com</p>
                            <p>Tel: 858-536-8716</p>
                        <a href="/home" class="btn btn-primary">Go HOME</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ContactUs;