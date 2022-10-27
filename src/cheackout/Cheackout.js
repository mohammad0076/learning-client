import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Cheackout = () => {
    const subs = useLoaderData()
    return (
        <div className=' text-center mt-5'>



            <h1>{subs.c_title}</h1>



            <p>Id:-{subs.id}</p>
            <p>Price:-{subs.price}</p>
            <p>Teacher:-{subs.teacher}</p>
            <Button className='primary'>Buy NOW</Button>

        </div>
    );
};

export default Cheackout;