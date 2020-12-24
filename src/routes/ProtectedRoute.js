import React from 'react'
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated === true ? <Component {...props} /> : <Redirect to='/signin' />
  )} />
);

export default ProtectedRoute