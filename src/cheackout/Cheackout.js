import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Cheackout = () => {
    const subs = useLoaderData()
    return (
        <div>
            <h1>{subs.c_title}</h1>
        </div>
    );
};

export default Cheackout;