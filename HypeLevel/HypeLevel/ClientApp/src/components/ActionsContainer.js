import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import {css} from "aphrodite";
import styles from "./styles/actionsContainer";
import ActionFrame from "./ActionFrame";
import iconMySpace from "../icons/myspace.png";
import iconAtronaut from "../icons/atronaut.png";
import iconSpotify from "../icons/spotify.png";
import iconChat from "../icons/chat.png";

const ActionsContainer = (props) => {
  return  (
  <div className={css(styles.actionsContainer)}>
    <ActionFrame img={iconAtronaut} head="Стать исполнителем" description="выполнять задания за различные вознаграждения"/>
    <ActionFrame img={iconChat} head="Создать беседу" description="Создать открытую/приватную беседу - добавить в нее людей"/>
    <ActionFrame img={iconSpotify} head="Создать оффер" description="Создать задание для исполнителей"/>
    <ActionFrame img={iconMySpace} head="Создать группу" description="Создать группу пользователей"/>
  </div>

          )
};

export default ActionsContainer;