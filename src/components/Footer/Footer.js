import React from 'react';
import './Footer.css';
import { Button, FormControl } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMessage, faPenFancy, faPenToSquare, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import image1 from '../../images/gallery/a (1).jpeg';
import image2 from '../../images/gallery/a (2).jpeg';
import image3 from '../../images/gallery/a (3).jpeg';
import image4 from '../../images/gallery/a (4).jpeg';
import image5 from '../../images/gallery/a (5).jpeg';
import image6 from '../../images/gallery/a (6).jpeg';
import image7 from '../../images/gallery/a (7).jpeg';
import image8 from '../../images/gallery/a (8).jpeg';
import image9 from '../../images/gallery/a (9).jpeg';
import image10 from '../../images/gallery/a (10).jpeg';
import image11 from '../../images/gallery/a (11).jpeg';
import image12 from '../../images/gallery/a (12).jpeg';
import { green } from '@mui/material/colors';


const Footer = () => {
    const element10 = <FontAwesomeIcon icon={faPenFancy} />
    return (
        <>
            <div id='about' className='footer-section'>

                <div className='share-section container'>
                    <div className='share share-1 flex-grow-1'>
                        <div className='footer-logo p-3'>
                            <a href='#'>
                                <img src={logo} alt='Logo!' className='logo responsive'></img>
                            </a>
                        </div>
                        <div className='logo-text'>
                            <a href="#">
                                <h3 className='fw-bold site-name'>EduMaster</h3>
                                <h6 style={{fontSize: "14px",  fontWeight:"600",}} >Education & Courses</h6>
                            </a>
                        </div>
                    </div>
                    <div className='share share-2'>
                        <a href='#' className='icon'>
                            <i className="fa-brands fa-facebook-f"></i>
                        </a> <br />
                        <a href='#' className='icon'>
                            <i className="fa-brands fa-twitter"></i>
                        </a> <br />
                        <a href='#' className='icon'>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a> <br />
                        <a href='#' className='icon'>
                            <i className="fa-brands fa-google-plus-g"></i>
                        </a> <br />
                    </div>
                    <div className='share share-3'>
                        <Button className='share3-button' variant='contained'> Join Now</Button>
                    </div>
                </div>

                <hr className='footer-hr' />

                <div className='footer-body container' >
                    <div className='body body-1'>
                        <div className='body-1-content'>
                            <h5> Sign Up For A Newsletter </h5>
                            <hr />
                            <p> Weekly Breaking News Analysis And Cutting Advices On Job Searching. </p>
                            <div className='input-group mb-3'>
                                <input className='form-control footer-input' type="email" name="email" placeholder='Your Email Address' />
                                <button className='btn btn-outline-secondary search-icon'>
                                    <i className="fa-solid fa-arrow-right"></i> </button>
                            </div>
                        </div>
                    </div>

                    <div className='body body-2'>
                        <div className='d-flex footer-text-div'>
                            <div className='footer-text'>
                                <h5>Company</h5>
                                <hr />
                                <a href='#'>Home</a> <br />
                                <a href='#'>About</a> <br />
                                <a href='#'>FAQs</a> <br />
                                <a href='#'>Contact</a> <br />
                            </div>
                            <div className='footer-text'>
                                <h5>Get In Touch</h5>
                                <hr />
                                <a href='#'>Dashboard</a> <br />
                                <a href='#'>Blog</a> <br />
                                <a href='#'>Portfolio</a> <br />
                                <a href='#'>Event</a> <br />
                            </div>
                            <div className='footer-text'>
                                <h5>Courses</h5>
                                <hr />
                                <a href='#'>Courses</a> <br />
                                <a href='#'>Details</a> <br />
                                <a href='#'>Membership</a> <br />
                                <a href='#'>Profile</a> <br />
                            </div>
                        </div>

                        <div className='body body-3'>
                            <h5>OurGallery</h5>
                            <hr className='g-hr' />
                            <div className='images-div'>
                                <img src={image1} className='gallery-image' alt="" />
                                <img src={image2} className='gallery-image' alt="" />
                                <img src={image3} className='gallery-image' alt="" />
                                <img src={image4} className='gallery-image' alt="" />
                                {/* <img src={image5} className='gallery-image' alt="" />
                            <img src={image6} className='gallery-image' alt="" />
                            <img src={image7} className='gallery-image' alt="" />
                            <img src={image8} className='gallery-image' alt="" /> */}
                                <img src={image9} className='gallery-image' alt="" />
                                <img src={image10} className='gallery-image' alt="" />
                                <img src={image11} className='gallery-image' alt="" />
                                <img src={image12} className='gallery-image' alt="" />
                            </div>
                        </div>

                    </div>

                </div>

                <hr className='r-hr' />

                <div className="rights">
                    <p>
                        &copy; 2022 <span className='r-name'>Soad Aanam</span> All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;