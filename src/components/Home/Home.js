import React from 'react';
import pic from './free.jpg';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Home.css'

const Home = () => {
    return (
        <div className='ms-5 ps-5'>
            <h1>This is home</h1>
            <div className='d-flex w-100'>
                <div className='con'>
                    <h1>We Transform Your Vision <span className='d-lg-block d-sm-none'>into Creative Results</span></h1>
                    <p>find the beetter outout from here</p>

                    <Button variant="primary"><Link to='/courses'><span className='dark'>Get Started</span></Link></Button>
                </div>
                <div className='w-50 nigga '>
                    <img src={pic} alt="Logo" />
                </div>
            </div>


        </div>
    );
};

export default Home;