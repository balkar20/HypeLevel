import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import Layout from './components/Layout';
import News from './components/News';



export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        
        {/* <Route path='/news' component={News} /> */}
        {/* <Route path='/help' component={} />
        <Route path='/help' component={} /> */}
    </Layout>
);
