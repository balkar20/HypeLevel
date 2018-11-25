import {newsActionCreators} from "../actions/newsActions";
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import NewsWindow from "./NewsWindow";
import {css} from "aphrodite"
import styles from "./styles/news"
import Aside from "./Aside";

const assides = [
    {name:"Kolya", data:"lol", id:"1"},
    {name:"Kolya", data:"lol", id:"2"},
    {name:"Kolya", data:"lol", id:"3"},];
class Home extends Component{
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
            <Col lg="4">
                {assides.map(a =>
                <Col lg="10">
                    <NewsWindow key={a.id} news={a}></NewsWindow>
                </Col>
                     
                )}
            </Col>
            <Col lg="8">
                {props.news.map(n => 
            <Col lg={4} >
                <NewsWindow key={n.id} news={n} />
            </Col>)}
            </Col>
        </Row>
        
    );
};
    

const mapStateToProps = (state) => {
    console.log("news is:", state.newsReducer.news)
    return {
         news:state.newsReducer.news
    };
  }

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(newsActionCreators, dispatch)
)(Home);