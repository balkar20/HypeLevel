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

    componentWillMount(){
        this.props.requestNews(1);
    }

    componentWillReceiveProps(nextProps) {
        // this.props.requestNews(1);
      }
    
    render(){

        return( 
            <div className={css(styles.container)}>
                {generateNews(this.props)}
            </div>
        )
    };
}

function generateNews(props) {
    return (
        <div >
                {props.news.map(n => 
                <Row className={css(styles.contentRow)}  >
                    <NewsWindow  key={n.id} news={n} />
                </Row>)}
        </div>
        
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