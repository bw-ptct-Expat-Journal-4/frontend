import React from 'react';
import styled from 'styled-components';
import axiosWithAuth from './../utility/axiosWithAuth';
import UpdateStory from './UpdateStory';

const ReadStory = (props) => {
    const deleteStory = storyID => {
        console.log('delete');
        axiosWithAuth()
            .delete(`/endpoint/${storyID}`)
            .then() // redirect to gallery
            .catch(error => {
                console.log('Delete error: ', error)
            })            
    }

    return (
        <Section className='story-display'>
            {/* <img src={require(`../img/${image}`)} alt={image}></img> */}
            {/* make path including user_ID and story_ID to protect vs duplicate filenames? */}
            
            {/* <div className='image-container'>
                <img src={props.image} alt={props.image}></img>
            </div>
            <div>{props.date}</div>
            <div>{props.description}</div> */}

            <div className='image-container'>
                <img src={require(`../img/01-leaving-ny.jpg`)} alt='#'></img>
            </div>
            <div>May 23, 2020</div>
            <div>La Guardia airport. Last day in NY.</div>

            <div className='button-row'>
                    <button
                        onClick={event => {
                            event.stopPropagation();
                            UpdateStory(props.storyID)}}>
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
    background: lightgray;
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

    .button-row {
        display: flex;
        justify-content: center;
    }

    button {
        margin-top: .5rem;
        margin-left: .25rem;
        margin-right: .25rem;
        width: 5rem;
    }
`
export default ReadStory;