import React, { useState } from 'react';
import './Services.css';
import { Rating, Button } from '@mui/material';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import serviceImage1 from '../../images/service/a (1).jpeg';
import serviceImage2 from '../../images/service/a (2).jpeg';
import serviceImage3 from '../../images/service/a (3).jpeg';
import serviceImage4 from '../../images/service/a (4).jpeg';
import 'animate.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {

    const [isEntered, setIsEntered] = useState(false);
    const [isEntered2, setIsEntered2] = useState(false);
    const [isEntered3, setIsEntered3] = useState(false);
    const [isEntered4, setIsEntered4] = useState(false);

    const handleClick = event => {
        // setIsEntered(true);

        // const firstEnter = setTimeout(setIsEntered(true), 1000);

        // const greet = setTimeout(console.log(greeting), 3000);
        // clearTimeout(greet);
    };

    const handleClick2 = event => {
        /* setTimeout(setIsEntered(false), 3000);
        setIsEntered2(false);
        setTimeout(setIsEntered3(false), 3000);
        setIsEntered4(false); */

        setIsEntered(false);
        setIsEntered2(false);
        setIsEntered3(false);
        setIsEntered4(false);
    };

    const navigate = useNavigate();
    const handleNAvigateRight = () => navigate('/home/services/');
    const handleNAvigateLaft = () => navigate('/home');


    return (
        <div className='container service-container'>
            <h2> <span className='pipe-bar'>|</span><span className='popular'>Popular</span> Courses</h2>
            <div className='service-text-div'>
                <div className='service-text'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                </div>
                <div className='service-icon'>
                    <button onClick={handleNAvigateLaft} className='service-icon-left'> <i class="fa-solid fa-angle-left"></i> </button>
                    <button onClick={handleNAvigateRight} className='service-icon-right'> <i class="fa-solid fa-angle-right"></i> </button>
                </div>
            </div>

            <CardGroup className='services'>
                <Card className='cards'>
                    <div className='image-div'>
                        <Card.Img variant="top" src={serviceImage1} onMouseEnter={() => setIsEntered(true)} />
                        <button id='imageButton1' className={isEntered ? 'animate__animated animate__backInLeft' : 'd-none'}> <a href="/home/services/readMore1"> Read More </a>
                        </button>
                    </div>
                    <Card.Body className='card-body' onMouseLeave={handleClick2} >
                        <p className='animate__animated animate__backInLeft'> Professional </p>
                        <Card.Title className='card-title' > <a href="/home/services/readMore1"> MERN Stuck Developer -LMS Plugin </a></Card.Title>
                    </Card.Body>
                    <div>
                        <div className='card-footer'>
                            <div className='review'>
                                <p>3 Review</p>
                                <Rating className='rating' name="size-small" defaultValue={3} size="small" />
                            </div>
                            <div className='price'>
                                <p className='old-price'>$320</p>
                                <h5 className='new-price'>$260</h5>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className='cards'>
                    <div className='image-div'>
                        <Card.Img variant="top" src={serviceImage2} onMouseEnter={() => setIsEntered2(true)} />

                        <button id='imageButton2' className={isEntered2 ? 'animate__animated animate__backInLeft' : 'd-none'}>
                            <a href="/home/services/readMore2"> Read More </a>
                        </button>
                    </div>
                    <Card.Body className='card-body' onMouseLeave={handleClick2} >
                        <p>Learning</p>
                        <Card.Title className='card-title' > <a href="/home/services/readMore2"> Strategy Law And Organization </a> </Card.Title>
                    </Card.Body>
                    <div>
                        <div className='card-footer'>
                            <div className='review'>
                                <p>4 Review</p>
                                <Rating className='rating' name="size-small" defaultValue={4} size="small" />
                            </div>
                            <div className='price'>
                                <p className='old-price'>$190</p>
                                <h5 className='new-price'>$170</h5>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className='cards'>
                    <div className='image-div'>
                        <Card.Img variant="top" src={serviceImage3} onMouseEnter={() => setIsEntered3(true)} />
                        <button id='imageButton3' className={isEntered3 ? 'animate__animated animate__backInLeft' : 'd-none'}>
                            <a href="/home/services/readMore3"> Read More </a>
                        </button>
                    </div>
                    <Card.Body className='card-body' onMouseLeave={handleClick2}>
                        <p>Programming</p>
                        <Card.Title className='card-title' > <a href="/home/services/readMore3"> Fundamentals Of JavaScript </a> </Card.Title>
                    </Card.Body>
                    <div>
                        <div className='card-footer'>
                            <div className='review'>
                                <p>8 Review</p>
                                <Rating className='rating' name="size-small" defaultValue={5} size="small" />
                            </div>
                            <div className='price'>
                                <p className='old-price'>$520</p>
                                <h5 className='new-price'>$450</h5>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className='cards'>
                    <div className='image-div'>
                        <Card.Img variant="top" src={serviceImage4} onMouseEnter={() => setIsEntered4(true)} />
                        <button id='imageButton4' className={isEntered4 ? 'animate__animated animate__backInLeft' : 'd-none'}>
                            <a href="/home/services/readMore4"> Read More </a>
                        </button>
                    </div>
                    <Card.Body className='card-body' onMouseLeave={handleClick2} >
                        <p>Marketing</p>
                        <Card.Title className='card-title' > <a href="/home/services/readMore2"> Build A Full Web Chat App From Scratch </a></Card.Title>
                    </Card.Body>
                    <div>
                        <div className='card-footer'>
                            <div className='review'>
                                <p>3 Review</p>
                                <Rating className='rating' name="size-small" defaultValue={3} size="small" />
                            </div>
                            <div className='price'>
                                <p className='old-price'>$450</p>
                                <h5 className='new-price'>$370</h5>
                            </div>
                        </div>
                    </div>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Services;