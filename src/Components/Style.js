import styled, { css } from 'styled-components';

export const ButtonStyles = styled.button`
    color: white;
    border-radius: 25px;
    background-image: linear-gradient(to right, #A8DADC, #457B9D);
    margin: 20px 10px 40px;
    padding: 7px 12px;
    font-size: 16px;
    box-shadow: 0px 0px 20px;
    border: 0px;

    &:hover {
        background-color: black;
        color: black;
    }

`

export const HomeStyles = styled.button`
    color: white;
    border-radius: 25px;
    background-image: linear-gradient(to right, #E63946, #1D3557);
    margin: 20px 10px 10px;
    padding: 7px 12px;
    font-size: 12px;
    box-shadow: 0px;
    border: 0px;

    &:hover {
        background-color: black;
        color: black;
    }
`

export const HomeButtonStyles = styled.div`
    text-align: right;
    padding: 10px;
`

export const RedirectStyles = styled.button`
    border: 0px;
    background-color: lightgrey;
    font-weight: bold;
    font-size: 14px;

`

export const InputStyles = styled.input`
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid black;
    padding: 0px 10px 10px;
    background-color: lightgrey;
`

export const ParagraphStyles = styled.p`
    display: flex;
    justify-content: center;
    position: relative;
    right: 67px;
    font-size: 13px;
    width: 100%;
    font-weight: bold;
`

export const DivStyles = styled.div`
    background-color: lightgrey;
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 55px 55px 37px 55px;
    margin: 0 auto;
`

export const ErrorStyles = styled.p`
    color: red;
    font-size: 13px;
`

export const RowStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const ImageStyles = styled.img`
    margin: 8px 8px 0 8px;
    vertical-align: bottom;
    min-width: 50%;
    max-height: 100%;
`

export const TitleStyles = styled.h3`
    text-align: left;
    font-weight: bold;
    margin-left: 25%;
`

export const DescriptionStyles = styled.p`
    background-color: lightgrey;
    width: 50%;
    margin-left: 25%;
    vertical-align: center;
`