import {newsActionCreators} from "../actions/newsActions";
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import NewsWindow from "./NewsWindow";
import {css} from "aphrodite";
import styles from "./styles/home";
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
        <Row className={css(styles.contentRow)}>
            <Col lg="3" className={css(styles.newsCol)}>
                {assides.map(a =>
                <Col lg="12">
                    <NewsWindow key={a.id} news={a}></NewsWindow>
                </Col>
                     
                )}
            </Col>
            <Col lg="9" className={css(styles.newsCol)}>
                {props.news.map(n => 
            <Col style={styles.newsCol} lg={4} >
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