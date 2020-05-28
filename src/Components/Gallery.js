import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RowStyles, ImageStyles, TitleStyles, DescriptionStyles } from './Style';

const pictures = [
    {
     id: 0,
     title: "Example Title",
     date: "01-22-20",
     url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
},
{
    id: 1,
    title: "Example Title",
    date: "01-22-20",
    url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
},
{
    id: 2,
    title: "Example Title",
    date: "01-22-20",
    url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
},
{
    id: 3,
    title: "Example Title",
    date: "01-22-20",
    url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
},
{
    id: 4,
    title: "Example Title",
    date: "01-22-20",
    url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
},
{
    id: 5,
    title: "Example Title",
    date: "01-22-20",
    url: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
},
]

const Gallery = () => {
    return (
        <div>
            <h2>JUST FOR TESTING PURPOSES</h2>
            <div><Link to="/"><button>Home</button></Link></div>
            {pictures.map(picture => (
                <RowStyles>
                    <div>
                        <TitleStyles>{picture.title}</TitleStyles>
                        <TitleStyles>{picture.date}</TitleStyles>
                        <ImageStyles src={picture.url} alt="yaya"></ImageStyles>
                        <DescriptionStyles>{picture.description}</DescriptionStyles>
                    </div>
                </RowStyles>
        ))}
        </div>
    )
}

export default Gallery;