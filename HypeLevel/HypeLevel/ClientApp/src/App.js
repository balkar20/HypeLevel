﻿import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home';



export default () => (
    <Route exact path='/' component={Home} />
);
