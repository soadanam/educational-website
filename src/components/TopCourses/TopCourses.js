import React from 'react';
import './TopCourses.css';
import { Grid, ListItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCompassDrafting, faCubes, faDollarSign, faGuitar, faHandHoldingDollar, faHeartCircleCheck, faHouseLaptop, faMoneyBill, faMoneyBillTransfer, faPenToSquare, faPeopleLine, faReceipt, faSearch, faSmile, faVestPatches } from '@fortawesome/free-solid-svg-icons';
import { Button} from '@mui/material';

const TopCourses = () => {

    const element1 = <FontAwesomeIcon icon={faPenToSquare} />
    const element2 = <FontAwesomeIcon icon={faHouseLaptop} />
    const element3 = <FontAwesomeIcon icon={faCubes} />
    const element4 = <FontAwesomeIcon icon={faPeopleLine} />
    const element5 = <FontAwesomeIcon icon={faBullhorn} />
    const element6 = <FontAwesomeIcon icon={faHandHoldingDollar} />
    const element7 = <FontAwesomeIcon icon={faHeartCircleCheck} />
    const element8 = <FontAwesomeIcon icon={faGuitar} />
    const element9 = <FontAwesomeIcon icon={faCompassDrafting} />

    return (
        <div className='main-div'>
            <div className='container top-courses-heading'>
                <h2> Explore Our Popular Courses</h2>
                {/* <Button className='course-button' variant='contained'> START NOW <i class="fa-solid fa-angle-right"> </i> </Button> */}
                <h6 className='text-uppercase'> Go at your own pace.. </h6>
            </div>

            <div container className='d-flex justify-content-around container popular-courses'>
                <Grid container spacing={4}>
                    <Grid item className='grid' xs={12} sm={6} md={4}>
                        <div className='grid-item d-flex justify-content-center'>
                            <div className='icons' xs={6}>
                                {element1}
                            </div>
                            <div className='flex-grow-'>
                                <ListItem className='d-flex flex-column align-items-start'>
                                    <h5>Data Science</h5>
                                    <p> Data is Everything</p>
                                </ListItem>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className='grid' xs={12} sm={6} md={4}>
                        <div className='grid-item d-flex justify-content-center'>
                            <div className='icons' xs={6}>
                                {element2}
                            </div>
                            <div className='flex-grow-'>
                                <ListItem className='d-flex flex-column align-items-start'>
                                    <h5>Business</h5>
                                    <p>Improve your business</p>
                                </ListItem>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className='grid' xs={12} sm={6} md={4}>
                        <div className='grid-item d-flex justify-content-center'>
                            <div className='icons' xs={6}>
                                {element3}
                            </div>
                            <div className='flex-grow-'>
                                <ListItem className='d-flex flex-column align-items-start'>
                                    <h5>Art & Design</h5>
                                    <p>Fun & Challenging</p>
                                </ListItem>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className='grid' xs={12} sm={6} md={4}>
                        <div className='grid-item d-flex justify-content-center'>
                            <div className='icons' xs={6}>
                                {element4}
                            </div>
                            <div className='flex-grow-'>
                                <ListItem className='d-flex flex-column align-items-start'>
                                    <h5>Lifestyle</h5>
                                    <p>New Skills, New You</p>
                                </ListItem>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className='grid' xs={12} sm={6} md={4}>
                        <div className='grid-item d-flex justify-content-center'>
                            <div className='icons' xs={6}>
                                {element5}
                            </div>
                            <div className='flex-grow-'>
                                <ListItem className='d-flex flex-column align-items-start'>
                                    <h5>Marketing</h5>
                                    <p>Improve your business</p>
                                </ListItem>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className='grid' xs={12} sm={6} md={4}>
                        <div className='grid-item d-flex justify-content-center'>
                            <div className='icons' xs={6}>
                                {element6}
                            </div>
                            <div className='flex-grow-'>
                                <ListItem className='d-flex flex-column align-items-start'>
                                    <h5>Finance</h5>
                                    <p>Fun & Challenging</p>
                                </ListItem>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className='grid' xs={12} sm={6} md={4}>
                        <div className='grid-item d-flex justify-content-center'>
                            <div className='icons' xs={6}>
                                {element7}
                            </div>
                            <div className='flex-grow-'>
                                <ListItem className='d-flex flex-column align-items-start'>
                                    <h5>Health & Fitness</h5>
                                    <p>Invest to Your Body</p>
                                </ListItem>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className='grid' xs={12} sm={6} md={4}>
                        <div className='grid-item d-flex justify-content-center'>
                            <div className='icons' xs={6}>
                                {element8}
                            </div>
                            <div className='flex-grow-'>
                                <ListItem className='d-flex flex-column align-items-start'>
                                    <h5>Music</h5>
                                    <p>Major or Minor</p>
                                </ListItem>
                            </div>
                        </div>
                    </Grid>
                    <Grid item className='grid' xs={12} sm={6} md={4}>
                        <div className='grid-item d-flex justify-content-center'>
                            <div className='icons' xs={6}>
                                {element9}
                            </div>
                            <div className='flex-grow-'>
                                <ListItem className='d-flex flex-column align-items-start'>
                                    <h5>Academics</h5>
                                    <p>High Education Level</p>
                                </ListItem>
                            </div>
                        </div>
                    </Grid>


                </Grid>
            </div>

        </div>
    );
};

export default TopCourses;