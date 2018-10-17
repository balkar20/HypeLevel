import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {css} from 'aphrodite';
import styles from '../appStyles';
import './styles/nav.css';

export default props => (
  <Navbar inverse fixedTop collapseOnSelect>
    <Navbar.Collapse className={"nav-top"} >
      <Nav >
        <LinkContainer  to={'/'} exact>
          <NavItem >
             ГЛАВНАЯ
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/counter'}>
          <NavItem>
             БАТЛЫ
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/fetchdata'}>
          <NavItem>
             ШКОЛА ХАЙПА
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/fetchdata'}>
          <NavItem>
             ШТУРМ
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
