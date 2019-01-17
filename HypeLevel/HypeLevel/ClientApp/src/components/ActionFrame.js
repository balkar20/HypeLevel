import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import {css} from "aphrodite";
import styles from "./styles/actionFrame";


const ActionFrame = ({head, description, img, href}) => {
  return  (
  <a href={href} className={css(styles.frame)}>
    <h4 className={css(styles.h)}>{head}</h4>
    <img className={css(styles.img)} src={img}></img>
    <p className={css(styles.p)}>{description}</p>
  </a>
          )
};

export default ActionFrame;