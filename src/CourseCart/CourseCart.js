import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './coursecart.css'

const CourseCart = ({ category }) => {
    const { catagories, image, description, teacher, videos } = category;
    return (
        <div>
            <Card style={{ width: '18rem', height: '25rem' }}>
                <Card.Img style={{ width: '18rem', height: '8rem' }} variant="top" src={image} />

                <Card.Body>
                    <Card.Title>{catagories}</Card.Title>
                    <Card.Text>
                        <p>Course-Teacher:-{teacher}</p>
                        <p>Total Videos:-{videos}</p>

                        <p> Descriprion:-{description.slice(0, 80)}</p>
                    </Card.Text>
                    <Button ><Link variant="primary" className='ars' to={`/courses/${category.id}`}>Course details</Link></Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCart;