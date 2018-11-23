import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import Layout from './components/Layout';



export default () => (
    <Route exact path='/' component={Layout} />
);
