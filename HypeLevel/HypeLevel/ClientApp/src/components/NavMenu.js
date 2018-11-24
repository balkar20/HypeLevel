import './styles/navMenu.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { css } from "aphrodite";
import styles from "./styles/navMenu";
import "./styles/navMenu.css";

export default props => {
  return <Navbar className={css(styles.navInverse)} inverse collapseOnSelect>

    <Navbar.Toggle />
    <Navbar.Collapse className={css(styles.navCollapse)}>

      <Nav className={css(styles.navFont)}>
        <LinkContainer to={'/kjkjk'} exact>
          <NavItem className={css(styles.hover)}> ГЛАВНАЯ
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/kjkjk'} exact>
          <NavItem className={css(styles.hover)}> ПОМОЩЬ
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/kjkjk'} exact>
          <NavItem className={css(styles.hover)}> ГРУППЫ
          </NavItem>
        </LinkContainer>
      </Nav>
      <Nav className={css(styles.navFont)} pullRight>
        <LinkContainer to={'/kjkjk'} exact>
          <NavItem className={css(styles.hover)}> ВХОД
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/kjkjk'} exact>
          <NavItem className={css(styles.hover)}> РЕГИСТРАЦИЯ
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

};