import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/Authprovider';
import { useNavigate, useLocation } from 'react-router-dom'

const Reg = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [error, seterror] = useState('')
    const from = location.state?.from?.pathname || '/';
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handlesubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUser(email, password).then(result => {
            const user = result.user;
            console.log(user);
            seterror('');
            navigate(from, { replace: true })
            form.reset();
            handleupdateprofile(name, photoURL)
        })
            .catch(e => {
                console.error(e)
                seterror(e.message)
            });
    }
    const handleupdateprofile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { }).catch(error => console.error(error));
    }

    return (
        <div>
            <Form className='mar' onSubmit={handlesubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Full Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type='text' placeholder="photoURL" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password at least 6 chars" required />
                </Form.Group>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>

                <Button variant="primary" type="submit">
                    Register
                </Button>

            </Form>
        </div>
    );
};

export default Reg;