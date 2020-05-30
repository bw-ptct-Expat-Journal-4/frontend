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
    padding: .25rem;
    background: linear-gradient(45deg, rgb(230, 57, 70, .6), rgb(69, 123, 157));

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
        margin: auto;
    }

    .nav-button {
        box-sizing: border-box;
        width: 7rem;
        height: 1.5rem;
        text-align: center;
        border: 1px solid rgb(0, 0, 0, .2);
        border-radius: 1rem;
        margin: .5rem;
        padding-left: .5rem;
        padding-right: .5rem;
        text-decoration: none;
        font-size: .8rem;
        color: white;
        // background: whitesmoke;
        background: linear-gradient(45deg, rgb(69, 123, 157), rgb(230, 57, 70));
    }

    .nav-button:hover {
        border: 1.25px solid white;
        background: linear-gradient(45deg, rgb(111, 160, 192), rgb(187, 24, 36));
        // background: rgb(69, 123, 157);
        color: white;
        // font-weight: bold;
    }
`

export default withRouter(Navbar);