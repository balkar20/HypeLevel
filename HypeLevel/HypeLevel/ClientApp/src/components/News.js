import {newsActionCreators} from "../actions/newsActions";
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
        console.log("from render - ", this.props.newsReducer.news);
        const news = this.props.newsReducer.news;
        return(
            
            <div>
                
                <ul>{news.map((i) => 
                  <li key={i.id}>
                  {i.name}
                  </li>
                )}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("news is:", state.newsReducer.news)
    return {
         newsReducer:state.newsReducer
    };
  }

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(newsActionCreators, dispatch)
)(News);