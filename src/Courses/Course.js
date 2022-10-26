import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import './course.css'
import CourseCart from '../CourseCart/CourseCart';

const Course = () => {
    const [categories, setcategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses').then(res => res.json()).then(data => setcategories(data));
    }, [])
    return (
        <div>

            <Row>
                <Col xs={3} className='category'>
                    All Course Category{categories.length}
                    <div>
                        {
                            categories.map(category => <p key={category.id}>
                                <Link className='ark' to={`/courses/${category.id}`}>{category.c_title}</Link>
                            </p>)
                        }
                    </div>

                </Col>
                <Col xs={6} >


                    <div className='row'>
                        {
                            categories.map(category => <CourseCart category={category}></CourseCart>)
                        }
                    </div>
                </Col>

            </Row>
        </div>
    );
};

export default Course;