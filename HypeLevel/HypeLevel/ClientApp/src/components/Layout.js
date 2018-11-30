import React from 'react';
import './styles/layout.css';
import Home from './Home';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';
import {css} from "aphrodite"
import styles from "./styles/layout"
import  "./styles/layout.css"
import large from "../pictures/HeadDarkFederation.png"
import small from "../pictures/HeadDarkFederationSmall.png"

const Layout = (props) => {
  return  (
  <div>
    <header className={css(styles.labelRow)}>
           <div className={css(styles.imageContainer)}>
            <img className={css(styles.imageLarge)} src={large}/>
            <img className={css(styles.imageSmall)} src={small}/>
           </div>
           <NavMenu />
           </header>
           <div className={css()}>
             {/* <Home/> */}
           </div>
           
  </div>

          )
};

export default Layout;
