import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import Middle from "./Middle";
import './styles/layout.css';

export default props => (
  <Grid fluid>
    <Row >
      <Col>
        <NavMenu />
      </Col>
    </Row>
    <Row  >
      <Col>
        <Middle />
      </Col>
    </Row>
    <Row >
      <Col>
        <NavMenu />
      </Col>
    </Row>
    <Row>
      <Col sm={8}>
        {props.children}
      </Col>
    </Row>
    
  </Grid>
);
