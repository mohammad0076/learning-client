import React from 'react';

const Blogs = () => {
    return (
        <div className='ms-5 mt-5'>
            <h1> what is cors?</h1>
            <p>cors is  method that allows you to make requests to the server deployed at a different domain</p>
            <h1>what is firebase?</h1>
            <p>Firebase allows  to track your users' journey through realtime and custom reporting.</p>
            <p>other options areAuth0, MongoDB, Passport, Okta,</p>
            <h1>How does the private route work?</h1>
            <p>renders child components ( children ) if the user is logged in</p>
            <h1>what is node js?how does it work?</h1>
            <p>It is used for server-side programming.Node. js runs on chrome v8 engine which converts javascript code into machine code</p>
        </div>
    );
};

export default Blogs;