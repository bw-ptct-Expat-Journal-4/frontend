import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoriesContext } from './StoriesContext';
import { useParams } from 'react-router-dom';

const UserGallery = (props) => {
    const [users, setUsers] = useContext(StoriesContext);
    const params = useParams();
    // console.log(params);
    let user = users.find(item => item.username === params.name);
    let storylist = user.stories;

    
    return (
        // console.log(storylist),
        <Section>
            {storylist.map(item => (
                <div className='story-container' key={item.storyID}>
                    <div className='story-image'>
                        <img src={require(`../img/${item.file}`)} alt={item.file}></img>
                    </div>
                    <div>{item.desc}</div>
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

    .story-container {
        margin: .5rem;
        width: 30%;
        border: 1px solid black;
        border-radius: 1rem;
        text-align: center;
    }

    .story-image {
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
export default UserGallery;