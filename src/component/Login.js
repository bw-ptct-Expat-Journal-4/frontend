import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyles, InputStyles, ParagraphStyles, RedirectStyles, HomeStyles, DivStyles, HomeButtonStyles, ErrorStyles } from './Style';

const formSchema = yup.object().shape({
    username: yup.string().required("Please enter a valid username"),
    password: yup.string().required("Please enter a valid password")
})

const Login = (props) => {
    const [formState, setFormState] = useState({
        username: "",
        password: ""
    })

    const [errorState, setErrorState] = useState ({
        username: "",
        password: ""
    })

    const [users, newUser] = useState([])

    const [buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid)
        });

    }, [formState]);

    const formSubmit = event => {
        event.preventDefault();
        console.log("user logged in");
        axios
            // .post("https://reqres.in/api/login", formState)
            .post("https://cors-anywhere.herokuapp.com/https://expat-journal22.herokuapp.com/app/auth/login", formState)
            .then(response => {
                console.log(response)
                // setFormState([...users], response.data)
                localStorage.setItem('token', response.data.token)
                props.history.push('/gallery')
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
        <div className="login-container">
            <div>
                <HomeButtonStyles><Link to="/"><HomeStyles>Home</HomeStyles></Link></HomeButtonStyles>
                <DivStyles>
                    <h2>Login</h2>
                    <form onSubmit={formSubmit}>

                        <label htmlFor="username">
                            <ParagraphStyles>Username</ParagraphStyles>
                            <InputStyles type="text" name="username" id="username" placeholder="Type your username" value={formState.username} onChange={inputChange} />
                        </label>
                        {errorState.username.length > 2 ? (
                        <ErrorStyles className="error">{errorState.username}</ErrorStyles>
                    ) : null}
                        <br/>

                        <label htmlFor="password">
                            <ParagraphStyles>Password</ParagraphStyles>
                            <InputStyles type="password" name="password" id="password" placeholder="Type your password" value={formState.password} onChange={inputChange} />
                        </label>
                        {errorState.password.length > 2 ? (
                        <ErrorStyles className="error">{errorState.password}</ErrorStyles>
                    ) : null}
                        <br/>

                        <ButtonStyles type="primary" className="submit" disabled={buttonDisabled}>Login</ButtonStyles>

                        <p>Not registered yet?</p>
                        <Link to="/register"><RedirectStyles>Register Here</RedirectStyles></Link>

                    </form>
                </DivStyles>
            </div>
        </div>
    )
}

export default withRouter(Login);