import React, { UseState } from 'react';
import axiosWithAuth from './../utility/axiosWithAuth';

const CreateStory = (props) => {
    const [date, setDate] = useState();
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
            .post(`http://somewhere.com/api/endpoint`, { date, description, image })
            .then() //redirect to gallery
            .catch(error => {
                console.log('New story error: ', error)
            })
    }

    return (
        <section className='story-form'>
            <form onSubmit={submitNewStory}>
                <label>Date:
                    <input
                        type='date'
                        name='date'
                        value={date}
                        onChange={updateDate}
                    />
                </label>

                <label>Description:
                    <input
                        type='text'
                        name='description'
                        value={description}
                        onChange={updateDescription}
                    />
                </label>

                <label>Image:
                    <input
                        type='text'
                        name='image'
                        value={image}
                        onChange={updateImage}
                    />
                </label>

                <div className='button-row'>
                    <button type='submit'>Save</button>
                    <button>Cancel</button>
                </div>
            </form>
        </section>
    )
}

export default CreateStory;