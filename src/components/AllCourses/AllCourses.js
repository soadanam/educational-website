import React from 'react';

// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import TopCourses from './../TopCourses/TopCourses';

const AllCourses = () => {
    return (
        <div>
            <h1>Hello from All Courses!</h1>

            <>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button>{' '}
                <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button>{' '}
                <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>

                <TopCourses></TopCourses>
            </>

        </div>
    );
};

export default AllCourses;