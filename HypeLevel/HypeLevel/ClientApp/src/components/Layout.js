import React from 'react';
import './styles/layout.css';
import Home from './Home';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';
import {css} from "aphrodite";
import styles from "./styles/layout";
import  "./styles/layout.css";
import large from "../pictures/HeadDarkFederation.png";
import small from "../pictures/HeadDarkFederationSmall.png";
import ActionsContainer from "./ActionsContainer";

const Layout = (props) => {
  return  (
  <div>
    <div>
    <header className={css(styles.header)}>
            <NavMenu />
            <div className={css(styles.imageContainer)}>
              <img className={css(styles.imageLarge)} src={large}/>
              <img className={css(styles.imageSmall)} src={small}/>
            </div>
           </header>
    </div>
    <div className={css(styles.container)}>
      <ActionsContainer />
      {props.children}
    </div>
  </div>

          )
};

export default Layout;
