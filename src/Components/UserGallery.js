import React from 'react';
import styled from 'styled-components';
import testData from './../utility/testData';

const UserGallery = (props) => {
    return (
        <Section>
            User Gallery
        </Section>
    )
}

const Section = styled.section`
    margin: 2rem;
    display: flex;
    flex-wrap: wrap;

    .user-container {
        margin: .5rem;
        width: 10rem;
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
export default UserGallery;