import React from 'react';
import PropTypes from "prop-types";

import logo from "../../logo.png";
import Styles from './Home.module.css';
import routes from "../../routes";
import {useHistory} from "react-router-dom";


const Strings = {
  WELCOME: 'Willkommen zum Bewerbertest für React Frontend Entwickler der iComps GmbH.',
  TASK: 'Bitte bearbeitet Aufgabe 1 und mindestens 3 der Aufgaben 2 bis 7. Erweitert die Aufgaben-Sammlung außerdem um eine eigene geeignete Aufgabe.',
  SUB_TASK: 'Ihr könnt dabei das gesamte Projekt nach euren Vorstellungen verändern. Fühlt euch frei Design und Layout nach euren Ideen zu verändern.'
}

const Home = ({ onStart }) => {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push(routes.Solutions.homepage);
    }

  return (
      <div className={Styles.root}>
          <div>{Strings.WELCOME}</div>
          <div>{Strings.TASK}</div>
          <div>{Strings.SUB_TASK}</div>
          <button onClick={onStart}>Los geht's</button>
          <button onClick={handleButtonClick}>Lösungen</button>
          <img src={logo} alt="logo"/>
          <a
              className={Styles.link}
              href="https://icomps.de"
              target="_blank"
              rel="noopener noreferrer"
          >
              iComps GmbH
          </a>
      </div>
  );
};



Home.defaultProps = {};

Home.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default Home;
