import './ReadMore.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../../images/service/details.jpeg';

import React, { useContext, useEffect } from 'react';
import { RingContext } from './../../App';
import { useParams } from 'react-router-dom';

const ReadMore = () => {
    const ornaments = useContext(RingContext);

    let keyValuePairs = useParams();
    // console.log("pairs??", keyValuePairs);
    let {any} = keyValuePairs;
    // console.log('value?', any);

    useEffect(()=>{
        fetch('myURL')
        .then(response => response.json())
        .then(jsonData => jsonDataHandler(jsonData))
    }, [])
    const jsonDataHandler = jData => {
        console.log('Name:', jData.name);
        console.log('Age:', jData.age);
    }

    return (
        <div>
            <h1>D E T A I L S !</h1>
            <Card className='container details'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Details about something!</Card.Title>
                    <Card.Text>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quos eligendi eveniet nulla odit ab nam unde sapiente doloribus inventore voluptatibus illo, minima officiis natus ex, eius aliquam error, aperiam tempore enim neque distinctio. Quos, reiciendis accusantium maxime, recusandae quam architecto culpa, libero deserunt mollitia illo excepturi. Ipsam labore deleniti, temporibus delectus sint, excepturi dolorum voluptates consequuntur quidem nihil optio veniam pariatur, deserunt blanditiis. Fuga unde expedita nemo, culpa saepe dolore laboriosam nobis dolorum ex mollitia non quidem impedit! Nulla atque deleniti magni repellendus cum voluptate, illo ipsa inventore, nostrum rem est possimus dicta laboriosam culpa soluta sequi amet corrupti quia iste animi expedita obcaecati, ut explicabo. Dolorum autem eligendi incidunt tempora praesentium. Error quo excepturi voluptatibus consequuntur, quas facilis quod doloribus fugit reprehenderit est accusamus eaque. Non voluptatem, voluptatum magnam suscipit inventore vitae obcaecati pariatur, nulla fugiat reprehenderit provident expedita accusamus deserunt eum quaerat cupiditate corrupti atque eius labore repudiandae ut eligendi dicta aperiam itaque. Aperiam nesciunt, minima exercitationem mollitia reprehenderit cum numquam dolorum quaerat laudantium corporis doloremque neque! At cupiditate quaerat adipisci necessitatibus expedita tenetur error maxime ipsum fuga consectetur animi nobis repellat facilis, magnam obcaecati odio voluptatibus quisquam rerum voluptates saepe ullam temporibus deleniti? Veritatis, quaerat ipsa.</p>

                        <h2> Gift: {ornaments} </h2>

                    </Card.Text>
                    <Button variant="primary" href="/home/services/" className='go-somewhere-button'>Go to Services</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ReadMore;