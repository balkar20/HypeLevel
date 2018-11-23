import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newsActionCreators } from '../actions/newsActions';
import News from "./News";

const Home = (props) => {
    return <div>
        <News/>
    </div>
    
  };

  export default Home;
