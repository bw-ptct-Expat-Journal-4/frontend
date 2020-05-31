import React, { useContext } from 'react';
import styled from 'styled-components';
import { StoriesContext } from './StoriesContext';
import { useParams, Link } from 'react-router-dom';

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
                        <Link to={`/read/${params.name}/${item.storyID}`}>
                            <img src={require(`../img/${item.file}`)} alt={item.file}></img>
                        </Link>
                    </div>
                    <div className='story-date'>{item.date}</div>
                    {/* <div className='story-text'>{item.desc}</div> */}
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
        width: 22.5%;
        border: 1px solid black;
        border-radius: 1rem;
        text-align: center;
        background: linear-gradient(45deg, rgb(111, 160, 192, .4), rgb(187, 24, 36, .4));
    }

    .story-container:hover {
        border: 1px solid white;
        background: linear-gradient(45deg, rgb(69, 123, 157), rgb(230, 57, 70));

        img {
            border: 1px solid white;
        }
    }

    .story-image {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: .5rem;
        box-sizing: border-box;
    }

    .story-date {
        color: white;
        margin-bottom: .5rem;
    }

    .story-text {
        color: white;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
    }

    img {
        border: 1px solid rgb(0, 0, 0, .2);
        border-radius: .5rem;
        width: 40vh;
        height: 40vh;
        object-fit: cover;
        margin-left: auto;
        margin-right: auto;
    }

    @media only screen and (max-width: 1200px) {
        .story-container {
            width: 30%;
        }

        img {
            width: 30vh;
            height: 30vh;
        }
    }

    @media only screen and (max-width: 768px) {
        .story-container {
            width: 45%;
        }

        img {
            width: 35vh;
            height: 35vh;
        }
    }

    @media only screen and (max-width: 576px) {
        .story-container {
            width: 90%;
        }

        img {
            width: 58vh;
            height: 58vh;
        }
    }
`
export default UserGallery;