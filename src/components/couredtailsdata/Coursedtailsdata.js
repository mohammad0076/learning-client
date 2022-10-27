import React from 'react';
import { useLoaderData } from 'react-router-dom'
const Coursedtailsdata = ({ sub }) => {
    return (
        <div>
            <h1>{sub.c_title}</h1>
        </div>
    );
};

export default Coursedtailsdata;