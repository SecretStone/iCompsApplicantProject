import React from 'react';
import PropTypes from 'prop-types';

import Task from '../../../components/Task/Task';

import Styles from './CaesarChiffre.module.css';
import routes from "../../../routes";
import {Link, NavLink} from "react-router-dom";

const Strings = {
  TITLE: '6) Cäsar Chiffre',
  TASK: 'Entschlüssele die folgende Cäsar Chiffre.',
  ENCRYPTED: 'Verschlüsselt',
  DECRYPTED: 'Entschlüsselt',
}

const CaesarChiffre = () => {
  return (
    <Task
      route={routes.Tasks.ceasarChiffre}
      title={Strings.TITLE}
      task={Strings.TASK}
    >
      <div className={Styles.root}>
        <NavLink
            as={Link}
            to={routes.Solutions.ceasarChiffre}
        >
          Lösung
        </NavLink>
      </div>
    </Task>
  );
};

CaesarChiffre.propTypes = {
  encrypted: PropTypes.string.isRequired,
  decrypted: PropTypes.string.isRequired,
  secretKey: PropTypes.number.isRequired,
};

export default CaesarChiffre;
