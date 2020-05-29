import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import testData from './../utility/testData';
import { StoriesContext } from './StoriesContext';
import UserGallery from './UserGallery';

const Gallery = () => {
    const [users, setUsers] = useContext(StoriesContext);
    const [selectedUser, setSelectedUser] = useState(0);

    const selectUser = (num) => {
        console.log(num);
        setSelectedUser(num);
    }
    console.log(selectedUser)

    return (
        <Section>
            {users.map(user => (
                <div className='user-container' key={user.user_ID}>
                    <div className='avatar' onClick={() => {
                        // setSelectedUser(user.user_ID, selectUser());
                        console.log(user.user_ID);
                        selectUser(user.user_ID);
                        console.log(selectedUser)}}>
                        <Link to={`/user/${user.username}`}>
                            {/* <img src={user.avatar} alt={user.username}></img> */}
                            <img src={require(`../img/01-leaving-ny.jpg`)} alt={user.username}></img>
                        </Link>
                    </div>
                    <div>{user.username}</div>
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

    .user-container {
        margin: .5rem;
        width: 30%;
        border: 1px solid black;
        border-radius: 1rem;
        text-align: center;
    }

    .avatar {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: .5rem;
    }

    img {
        width: 100%;
        border-radius: .5rem;
    }
`
export default Gallery;