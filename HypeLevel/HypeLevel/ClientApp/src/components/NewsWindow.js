import { css } from "aphrodite";
import styles from "./styles/newsWindow";
import { Col, Grid, Row } from 'react-bootstrap';
import React, { Component } from 'react';

export default ({news}) => {
 return (
     <div className={css(styles.box)}>
        <img className={css(styles.image)} src={news.imagePath} alt="Image not found!"/>
        <h1>{news.name}</h1>
        <p>{news.data}</p>
     </div>
 )
};