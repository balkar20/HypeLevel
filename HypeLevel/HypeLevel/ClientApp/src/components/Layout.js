import React from 'react'
import './styles/layout.css'
import {Home} from './Home'
import { Col, Grid, Row } from 'react-bootstrap'
import {NavMenu} from './NavMenu'

const Layout = (props) => {
  return <div>
           <Grid fluid>
           <Row>
             <Col sm={3}>
             {/* <NavMenu /> */}
             </Col>
             <Col sm={9}>
             {props.children}
             </Col>
           </Row>
         </Grid>
         </div>
};

export default Layout;
