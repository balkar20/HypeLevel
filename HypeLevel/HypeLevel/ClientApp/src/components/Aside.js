import { css } from "aphrodite";
import styles from "./styles/newsWindow";
import { Col, Grid, Row } from 'react-bootstrap';
import React from 'react';

export default ({asides}) => {
    return (
        <div className={css(styles.box)}>
           <h1>{asides.name}</h1>
           <p>{asides.data}</p>
        </div>
    )
   };