import './styles/navMenu.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem,  MenuItem, NavDropdown} from 'react-bootstrap';
import {css} from "aphrodite";
import styles from "./styles/navMenu";
import "./styles/navMenu.css";

export default props => {
    return <Navbar className={css(styles.navInverse)} inverse collapseOnSelect>
   
    <Navbar.Toggle />
  <Navbar.Collapse>
  
    <Nav className={css(styles.navFont)}>
    
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem  eventKey={2} href="#">
        Link
      </NavItem>
    </Nav>
    <Nav className={css(styles.navFont)} pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;

};