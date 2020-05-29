import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect to='/login' />
            )
        }
    />
);

export default PrivateRoute;

// Protected routes only render with authentication. Use in place of <Route />
// for routes that are not public.