import React from 'react';
import './styles/layout.css';
import {Home} from './Home';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import {css} from "aphrodite"
import styles from "./styles/layout"
import  "./styles/layout.css"
import large from "../pictures/HeadDarkFederation.png"
import small from "../pictures/HeadDarkFederationSmall.png"
import extraSmall from "../pictures/HeadDarkFederationExtraSmall.png"

const Layout = (props) => {
  return (
           <Grid fluid>
           <header className={css(styles.labelRow)}>
           <div className={css(styles.imageContainer)}>
            <img className={css(styles.imageLarge)} src={large}/>
            <img className={css(styles.imageSmall)} src={small}/>
           </div>
            
           </header>
           <Row className={css(styles.topRow, styles.small)}>
           <NavMenu />
           </Row>
           <Row className={css(styles.contentRow)}>
             {props.children}
           </Row>
           <footer className={css(styles.footer)}></footer>
         </Grid>
         
  )
};

export default Layout;
