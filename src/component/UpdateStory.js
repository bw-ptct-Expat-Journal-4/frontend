import React from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utility/axiosWithAuth';

const UpdateStory = props => {
    console.log('Update')
    const updateDate = event => {
        console.log(event.target.value);
    }

    const updateDescription = event => {
        console.log(event.target.value);
    }

    const updateImage = event => {
        console.log(event.target.value);
    }

    const updateStory = event => {
        event.preventDefault();
        console.log('update story');
        // axiosWithAuth()
        //     .post(`/endpoint`, { date, description, image }) // baseURL will handle path
        //     .then() // redirect to gallery
        //     .catch(error => {
        //         console.log('New story error: ', error)
        //     })
    }

    return (
        <Section className='story-update'>
            <form onSubmit={updateStory}>
                <div className='field'>
                    <label htmlFor='date'>Date:</label>
                    <input
                        type='date'
                        name='date'
                        id='date'
                        value={props.sendDate}
                        onChange={updateDate}
                    />
                </div>

                <div className='field'>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        name='description'
                        id='description'
                        placeholder='Tell us what happened on this day.'
                        value={props.sendDesc}
                        onChange={updateDescription}
                    />
                </div>

                <div className='field'>
                    <label htmlFor='image'>Image URL:</label>
                    <input
                        type='text'
                        name='image'
                        id='image'
                        placeholder='Type or paste the path to your image.'
                        value={props.sendImage}
                        onChange={updateImage}
                    />
                </div>

                <div className='button-row'>
                    <button type='submit'>Save</button>
                    <button>Cancel</button>
                </div>
            </form>
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
export default UpdateStory;