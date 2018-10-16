import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import {css} from 'aphrodite';
import styles from '../appStyles';

export default props => (
  <Grid fluid>
    <Row className={css(styles.row)}>
      <Col sm={8} smOffset={2}>
        <NavMenu sm={8} smOffset={2} />
      </Col>
    </Row>
    <Row  className={css(styles.middleHead)}>
      <Col sm={8} smOffset={2}>
      <Row className ={css(styles)}>
        {/* <img src={require('../pictures/maxresdefault.jpg'
      )} /> */}
      </Row>
      
      </Col>
    </Row>
    <Row>
      <Col sm={8}>
        {props.children}
      </Col>
    </Row>
    
  </Grid>
);
