import React from 'react';
import './Home.css';
import { Button, filledInputClasses, Rating } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faFile, faFileCircleCheck, faFileInvoice, faFileSignature, faLaptopFile, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import Services from '../Services/Services';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import img1 from '../../images/institution/a3.jpg';
import img2 from '../../images/institution/a1.jpg';
import img3 from '../../images/institution/a2.jpg';
// import { CardGroup } from 'react-bootstrap/CardGroup';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
    <i class="fa-solid fa-file-signature"></i>

    const element3 = <FontAwesomeIcon icon={faSearchLocation} />
    const element4 = <FontAwesomeIcon icon={faFileSignature} />
    const element5 = <FontAwesomeIcon icon={faFileInvoice} />
    const element6 = <FontAwesomeIcon icon={faLaptopFile} />
    const element7 = <FontAwesomeIcon icon={faCity} />

    let navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/allCourses');
    }
    let navigate2 = useNavigate();
    const handleNavigate2 = () => {
        navigate2('/home/services/any')
    }


    return (
        <>
            <div className='top-section'>
                <h1 className='container'> Learning Courses Online </h1>
                <div className='top-text-div'>
                    <div className='top-text'>
                        <p> We offer professional SEO services that help websites <span className='organic-search'>increase their organic search</span> score drastically in order to complete for the highest rankings. </p>
                    </div>
                </div>

                <Button onClick={handleNavigate} className='course-button' variant='contained'> START A COURSE <i class="fa-solid fa-angle-right"> </i> </Button>

                <div className="top-logo-container container">
                    <div className='top-logo' onClick={handleNavigate2}>
                        <h4>
                            {element4}
                        </h4>
                        <h3>
                            Learn the Latest Skills
                        </h3>
                    </div>
                    <div className='top-logo' onClick={handleNavigate2}>
                        <h4>
                            {element6}
                        </h4>
                        <h3>
                            Learn Online Courses
                        </h3>
                    </div>
                    <div className='top-logo' onClick={handleNavigate2}>
                        <h4>
                            {element7}
                        </h4>
                        <h3>
                            Learn from Industry Experts
                        </h3>
                    </div>
                </div>

                <div id='services1'>
                    <Services></Services>
                </div>

                <div className='container service-container' id='service2'>
                    <h2> <span className='pipe-bar'>|</span><span className='popular'>Why Choose</span> Our Institution</h2>
                    <div className='service-text-div'>
                        <div className='service-text'>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                        </div>
                        <div className='service-icon'>
                            <button className='service-icon-left'> <i class="fa-solid fa-angle-left"></i> </button>
                            <button className='service-icon-right'> <i class="fa-solid fa-angle-right"></i> </button>
                        </div>
                    </div>

                    <CardGroup className='services'>

                        <Card className='cards cards2'>
                            <div className='image-div'>
                                <Card.Img variant="top" src={img1} />
                            </div>
                            <div className='card-info'>
                                <Card.Body className='card-body'>
                                    <Card.Title className='card-title' > <a href="/home/services/readMore1"> Best Industry Leaders </a></Card.Title>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem consequatur aspernatur voluptas repudiandae facilis fugiat suscipit deserunt. Cumque, facere!</p>

                                    <button className='view-more' onClick={handleNavigate2}> View More
                                    </button>
                                </Card.Body>
                            </div>
                        </Card>

                        <Card className='cards cards2'>
                            <div className='image-div'>
                                <Card.Img variant="top" src={img2} />
                            </div>
                            <div className='card-info'>
                                <Card.Body className='card-body'>
                                    <Card.Title className='card-title' > <a href="/home/services/readMore2"> Book Library & Store </a> </Card.Title>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores beatae veniam repudiandae amet laborum natus natusl aborum natus tempore! Nihil, iste cumque.</p>

                                    <button className='view-more' onClick={handleNavigate2}> View More
                                    </button>
                                </Card.Body>
                            </div>
                        </Card>

                        <Card className='cards cards2'>
                            <div className='image-div'>
                                <Card.Img variant="top" src={img3} />
                            </div>
                            <div className='card-info'>
                                <Card.Body className='card-body'>
                                    <Card.Title className='card-title' > <a href="/home/services/readMore3"> Learn Courses Online </a> </Card.Title>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati soluta, exercitationem nesciunt ratione autem suscipit consectetur ea odio molestias.</p>

                                    <button className='view-more' onClick={handleNavigate2}> View More
                                    </button>
                                </Card.Body>
                            </div>
                        </Card>

                    </CardGroup>
                </div>

            </div>

        </>
    );
};

export default Home;