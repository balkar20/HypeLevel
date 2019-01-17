import { css } from "aphrodite";
import styles from "./styles/newsWindow";
import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';


export default ({news}) => {
 return (
     <div className={css(styles.box)}>
        <h1>{news.name}</h1>
        <img src={news.imagePath} alt="Image not found!"/>
        <p>{news.data}</p>
     </div>
 )
};