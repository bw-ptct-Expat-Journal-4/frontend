import React, { useState } from 'react';
import axiosWithAuth from './../utility/axiosWithAuth';
import styled from 'styled-components';

const CreateStory = (props) => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [storyID, setStoryID] = useState(); // assigned by back-end?
    // const [userID, setUserID] = useState(props.userID);

    const updateDate = event => {
        setDate(event.target.value);
    }

    const updateDescription = event => {
        setDescription(event.target.value);
    }

    const updateImage = event => {
        setImage(event.target.value);
    }

    const submitNewStory = event => {
        event.preventDefault();
        axiosWithAuth()
            .post(`/endpoint`, { date, description, image }) // baseURL will handle path
            .then() // redirect to gallery
            .catch(error => {
                console.log('New story error: ', error)
            })
    }

    return (
        <Section className='story-form'>
            <form onSubmit={submitNewStory}>
                <div className='field'>
                    <label htmlFor='date'>Date:</label>
                    <input
                        type='date'
                        name='date'
                        id='date'
                        value={date}
                        onChange={updateDate}
                    />
                </div>

                <div className='field'>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        name='description'
                        id='description'
                        placeholder='Tell us what happened on this day.'
                        value={description}
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
                        value={image}
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
    form {
        background: lightgray;
        border-radius: 1rem;
        padding: 1rem;
        box-sizing: border-box;
        margin: 2rem;
        width: 90%;
        min-width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .field {
        margin-bottom: .25rem;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-column-gap: 1rem;
    }

    label {
        text-align: right;
    }

    textarea {
        height: 5rem;
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
export default CreateStory;