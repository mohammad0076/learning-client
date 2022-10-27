import React from 'react';
import { useLoaderData } from 'react-router-dom'
import Coursedtailsdata from '../couredtailsdata/Coursedtailsdata';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Buttons from './Button/Vuttons';
import Vuttons from './Button/Vuttons';

const CourseDtails = () => {
    const subs = useLoaderData()
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses').then(res => res.json()).then(data => setcategories(data));
    }, [])

    return (
        <div>

            <Card className="bg-dark text-dark m-auto mt-5" style={{ width: '30rem', }}>
                <Card.Img src={subs.image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{subs.c_title}</Card.Title>
                    <Card.Text>
                        <span className='text-bold'>  About Course</span>:-{subs.description}

                        <p>Course Teacher:-{subs.teacher}</p>

                    </Card.Text>

                    <Card.Text><p> Price:-{subs.price}</p></Card.Text>

                    <button className='text-bold'>get premium access
                        <Link className='as' to={`/cheackout/${subs.id}`} >Click Here</Link>

                    </button>

                </Card.ImgOverlay>




            </Card>
        </div>
    );
};

export default CourseDtails;