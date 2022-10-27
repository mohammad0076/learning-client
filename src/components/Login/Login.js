import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { AuthContext } from '../../context/Authprovider';
import './login.css';



const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { providerLogin, signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const handleGooglesignin = () => {
        providerLogin(googleProvider).then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, { replace: true })
        })
            .catch(error => {

                console.log(error)

            })
    }
    const [error, seterror] = useState('')
    const handlelogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password).then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            seterror('');
            navigate(from, { replace: true })
        }).catch(error => {
            console.log(error)
            seterror(error.message)
        })

    }
    return (
        <div >
            <Form className='mar' onSubmit={handlelogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
                <Link className='as' to='/reg'>Dont have any account? Register</Link>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Button onClick={handleGooglesignin} variant="outline-primary">GoogleLogin </Button>
                <Button variant="outline-primary">GitLogin</Button>
            </Form>
            <div>

            </div>
        </div>
    );
};

export default Login;