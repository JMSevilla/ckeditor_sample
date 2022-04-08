import React, {Component} from 'react';
import { Switch ,Route } from 'react-router-dom';
import {AlignRoutes} from './route'
import HomePage from '../views/Home'

const RouteWithLoad = ({component: Component, ...rest}) => {
     
    return (
        <Route {...rest} render={props => (<> <Component {...props} /> </>)} />
    );
};


export default () => (
    <Switch>
    <RouteWithLoad exact path={AlignRoutes.Home.path} component={HomePage} />
</Switch>
)