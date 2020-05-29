import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { ButtonStyles, InputStyles, ParagraphStyles, RedirectStyles, HomeStyles, DivStyles, HomeButtonStyles, ErrorStyles } from './Style';

const formSchema = yup.object().shape({
    name: yup.string().required("This is a required field"),
    email: yup.string().required("This is a required field"),
    username: yup.string().required("This is a required field"),
    password: yup.string().required("This is a required field"),
})

const Register = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        username: "",
        password: ""
    })

    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        username: "",
        password: ""
    })

    const [users, setUser] = useState([])

    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid)
        });

    }, [formState]);

    const formSubmit = event => {
        event.preventDefault();
        console.log("user registered")
        axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {
            console.log(response)
            setFormState([...users], response.data)
        })
        .catch(err => console.log("something went wrong", err))
    }

    const inputChange = event => {
        event.persist()
        validate(event)
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormState({...formState, [event.target.name]: value})
    }

    const validate = event => {
        let value = 
            event.target.type === "checkbox" ? event.target.checked : event.target.value;
            yup
            .reach(formSchema, event.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                        [event.target.name]: err.errors[0]
                })
            })
    }

    return (
        <div className="register-container">
            <HomeButtonStyles><Link to="/"><HomeStyles>Home</HomeStyles></Link></HomeButtonStyles>
            <DivStyles>
            <h2>Register</h2>
            <form onSubmit={formSubmit}>

                <label htmlFor="name">
                    <ParagraphStyles>Name</ParagraphStyles>
                    <InputStyles type="text" name="name" id="name" placeholder="Name" value={formState.name} onChange={inputChange} required />
                </label>
                {errorState.name.length > 2 ? (
                <ErrorStyles className="error">{errorState.name}</ErrorStyles>
            ) : null}
                <br/>

                <label htmlFor="email">
                    <ParagraphStyles>Email</ParagraphStyles>
                    <InputStyles type="email" name="email" id="email" placeholder="Email" value={formState.email} onChange={inputChange} required />
                </label>
                {errorState.email.length > 2 ? (
                <ErrorStyles className="error">{errorState.email}</ErrorStyles>
            ) : null}
                <br />

                <label htmlFor="username">
                    <ParagraphStyles>Username</ParagraphStyles>
                    <InputStyles type="text" name="username" id="username" placeholder="Username" value={formState.username} onChange={inputChange} minLength={4} required />
                </label>
                {errorState.username.length > 2 ? (
                <ErrorStyles className="error">{errorState.username}</ErrorStyles>
            ) : null}
                <br/>

                <label htmlFor="password">
                    <ParagraphStyles>Password</ParagraphStyles>
                    <InputStyles type="password" name="password" id="password" placeholder="Password" value={formState.password} onChange={inputChange} minLength={4} required />
                </label>
                {errorState.password.length > 2 ? (
                <ErrorStyles className="error">{errorState.password}</ErrorStyles>
            ) : null}
                <br/>

                <ButtonStyles className="submit" disabled={buttonDisabled}>Register</ButtonStyles>

                <p>Already registered?</p>
                <Link to="/login"><RedirectStyles>Login Here</RedirectStyles></Link> 
            </form>
            </DivStyles>
        </div>
    )
}

export default Register;