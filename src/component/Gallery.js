import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StoriesContext } from './StoriesContext';

const Gallery = () => {
    const [users, setUsers] = useContext(StoriesContext);

    return (
        <Section>
            {users.map(user => (
                <div className='user-container' key={user.user_ID}>
                    <div className='avatar'>
                        <Link to={`/user/${user.username}`}>
                            {/* <img src={user.avatar} alt={user.username}></img> */}
                            <img src={require(`../img/01-leaving-ny.jpg`)} alt={user.username}></img>
                        </Link>
                    </div>
                    <div className='user-name'>{user.username}</div>
                </div>
            ))}
        </Section>
    )
}

const Section = styled.section`
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // background: linear-gradient(rgb(230, 57, 70, .6), rgb(69, 123, 157));
    // background-image: url(https://artjournalist.com/wp-content/uploads/2019/05/road-trip-journal-page-example.jpg);
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    // background-size: cover;

    .user-container {
        margin: .5rem;
        width: 30%;
        border: 1px solid black;
        border-radius: 1rem;
        text-align: center;
        background: linear-gradient(45deg, rgb(111, 160, 192, .4), rgb(187, 24, 36, .4));
    }

    .user-container:hover {
        border: 1px solid white;
        background: linear-gradient(45deg, rgb(69, 123, 157), rgb(230, 57, 70));

        img {
            border: 1px solid white;
        }
    }

    .avatar {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: .5rem;
        box-sizing: border-box;
    }
    
    img {
        width: 100%;
        border-radius: .5rem;
        box-sizing: border-box;
        border: 1px solid rgb(0, 0, 0, .2);
    }
    
    .user-name {
        color: white;
        margin-bottom: .5rem;
    }

    @media only screen and (max-width: 768px) {
        .user-container {
            width: 45%;
        }
    }

    @media only screen and (max-width: 500px) {
        .user-container {
            width: 90%;
        }
    }
`
export default Gallery;