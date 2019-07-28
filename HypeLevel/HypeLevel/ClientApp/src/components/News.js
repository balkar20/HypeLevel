import {newsActionCreators} from "../actions/newsActions";
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import NewsWindow from "./NewsWindow";
import { css } from "aphrodite";
import styles from "./styles/news";

class News extends Component{
    // constructor(props){
    //     super(props)
    // }

    componentWillMount(){
        this.props.requestNews(1);
    }

    componentWillReceiveProps(nextProps) {
        // this.props.requestNews(1);
      }
    
    render(){

        return( 
            <div className="">
                {generateNews(this.props)}
            </div>
        )
    };
}
function generateNews(props) {
    return (
        <Row >
            <Col lg={3}>
                
            </Col>
            <Col lg={9}>
                {props.newsList.map(n => 
            <Col lg={4} >
                <NewsWindow news={n} />
            </Col>)}
            </Col>
        </Row>
        
    );
};
    

const mapStateToProps = (state) => {
    console.log("news is:", state.newsReducer.news)
    return {
         newsList:state.newsReducer.news
    };
  }

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(newsActionCreators, dispatch)
)(News);