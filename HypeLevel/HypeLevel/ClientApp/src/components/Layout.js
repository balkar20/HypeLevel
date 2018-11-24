import React from 'react';
import './styles/layout.css';
import {Home} from './Home';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import {css} from "aphrodite"
import styles from "./styles/layout"
import  "./styles/layout.css"

const Layout = (props) => {
  return <div>
           <Grid fluid>
           <Row className={css(styles.labelRow)}>

           </Row>
           <Row className={css(styles.topRow, styles.small)}>
           <NavMenu />
             <Col sm={9}>
             {props.children}
             </Col>
           </Row>
         </Grid>
         </div>
};

export default Layout;
