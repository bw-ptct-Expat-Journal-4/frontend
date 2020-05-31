import React, { useContext } from 'react';
import styled from 'styled-components';
// import axiosWithAuth from './../utility/axiosWithAuth';
import axios from 'axios';
import UpdateStory from './UpdateStory';
import { StoriesContext } from './StoriesContext';
import { useParams } from 'react-router-dom';

const ReadStory = (props) => {
    const [users, setUsers] = useContext(StoriesContext);
    const params = useParams();
    let user = users.find(item => item.username === params.name);
    let storylist = user.stories;
    let story = storylist.filter(item => item.storyID === Number(params.story));

    const deleteStory = storyID => {
        console.log('delete');
        // axiosWithAuth()
        axios
            // .delete(`/endpoint/${storyID}`)
            .delete(`https://reqres.in/api/users/${storyID}`)
            .then(response => console.log(response)) // redirect to gallery
            .catch(error => {
                console.log('Delete error: ', error)
            })            
    }

    return (
        <Section className='story-display'>
            <div className='image-container'>
                <img src={require(`../img/${story[0].file}`)} alt={story[0].desc}></img>
            </div>
            <div className='image-text'>{story[0].date}</div>
            <div className='image-text'>{story[0].desc}</div>

            <div className='button-row'>
                    <button
                        onClick={event => {
                            event.stopPropagation();
                            UpdateStory(props.storyID=props.storyID, props.sendDate='May 23, 2020',
                            props.sendDesc='La Guardia airport. Last day in NY.', 
                            props.sendImage='image path')}}>
                        Update
                    </button>
                    
                    <button 
                        onClick={event => {
                            event.stopPropagation();                            
                            deleteStory(props.storyID)}}>
                        Delete
                    </button>
                </div>
        </Section>
    )    
}

const Section = styled.section`
    width: 90%;
    background: linear-gradient(45deg, rgb(111, 160, 192, .4), rgb(187, 24, 36, .4));
    border-radius: 1rem;
    padding: .5rem;
    box-sizing: border-box;        
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-top: 2rem;

    .image-container {
        width: 100%;
        margin-left: auto;
        margin-right: auto;        
    }
    
    img {
        width: 100%;
        border-radius: 1rem;
    }

    div {
        margin: .25rem;
    }

    .image-text {
        color: gainsboro;
    }

    .button-row {
        display: flex;
        justify-content: center;
    }

    button {
        margin-top: .5rem;
        margin-left: .25rem;
        margin-right: .25rem;
        width: 7rem;
        height: 1.5rem;
        color: white;
        border: 1px solid rgb(0, 0, 0, .2);
        border-radius: 1rem;
        background: linear-gradient(45deg, rgb(69, 123, 157), rgb(230, 57, 70));
    }

    button:hover {
        border: 1.25px solid white;
    }
`
export default ReadStory;