import React from 'react';
import './styles/layout.css';
import {Home} from './Home';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import {css} from "aphrodite"
import styles from "./styles/footer"
import  "./styles/footer.css"
import large from "../pictures/HeadDarkFederation.png"
import small from "../pictures/HeadDarkFederationSmall.png"

const Footer = (props) => {
  const footerClass = `fixed-bottom ${css(styles.footer)}`;
  return (
           <footer className={footerClass} ></footer>
  )
};

export default Footer;