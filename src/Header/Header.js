import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider';
import './Header.css'
import Image from 'react-bootstrap/Image'
import { BsFillChatSquareFill } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import { FactorId } from 'firebase/auth';



const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handlelogout = () => {
        logout()
            .then(() => { }).catch(error => console.error)
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#home">ZeroHero-Programming</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-5">

                            <Link className='as' to='/home'>Home</Link>
                            <Link className='as' to='/courses'>Courses</Link>
                            <Link className='as' to='/faq'>FAQ</Link>
                            <Link className='as' to='/theme' >ChangeTheme</Link>



                            <Link className='as' >
                                {
                                    user?.uid ?
                                        <>
                                            <Link className='as' onClick={handlelogout}  >Logout </Link>
                                            <span className='as'>{user?.displayName}</span>

                                        </>
                                        :
                                        <>
                                            <Link className='as' to='/login'>Login</Link>

                                        </>
                                }</Link>

                            <Link >{user ?
                                <Image data-tip data-for="registerTip" style={{ height: '30px' }} roundedCircle src={user?.photoURL} title={user?.displayName}></Image>
                                : <Link className='as' to='/reg'>Register</Link>

                            }</Link>
                            <ReactTooltip id="registerTip" place="top" effect="solid">

                            </ReactTooltip>
                            {console.log(user)}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;