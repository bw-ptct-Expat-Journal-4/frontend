import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = (props) => {
    const deleteToken = () => {
        localStorage.removeItem('token');
        props.history.push('/');
    }

    return (
        <Section className='navbar'>
            <div className='navbar-contents'>
                <div className='navbar-logo-box'>
                    <Link to='/gallery'>
                        <img className='navbar-logo' src={require(`./../img/logo.png`)} alt='logo'></img>
                    </Link>
                </div>

                <div className='links'>
                    <Link to='/create' className='nav-button'>Create Story</Link>
                    <Link to='/read' className='nav-button'>(Temp) Read</Link>
                    <Link to='/' className='nav-button' onClick={deleteToken}>Logout</Link>
                </div>
            </div>
        </Section>
    )
}

const Section = styled.section`
    width: 100%;
    background: lightgray;

    .navbar-contents {
        display: flex;
        align-items: center;
        width: 90%;
        margin-right: auto;
        margin-left: auto;
    }

    .navbar-logo-box {
        width: 2rem;
    }

    .navbar-logo {
        width: 100%;
        border-radius: .25rem;
    }

    .links {
        display: flex;
        justify-content: flex-end;
        width: 90%;
        margin-right: auto;
        margin-left: auto;
    }

    .nav-button {
        width: 4.5rem;
        text-align: center;
        border: 1px solid black;
        border-radius: 1rem;
        margin: .5rem;
        padding-left: .5rem;
        padding-right: .5rem;
        text-decoration: none;
        font-size: .8rem;
        color: black;
        background: whitesmoke;
    }

    .nav-button:hover {
        background: black;
        color: white;
    }
`

export default withRouter(Navbar);