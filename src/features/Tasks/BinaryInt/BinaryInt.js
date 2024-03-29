import React from 'react';
import PropTypes from 'prop-types';

import Task from '../../../components/Task/Task';

import Styles from './BinaryInt.module.css';
import routes from "../../../routes";
import {Link, NavLink} from "react-router-dom";

const Strings = {
  TITLE: '5) Binärzahl konvertieren',
  TASK: 'Übersetze die binäre Zahl in eine Dezimalzahl. Erweitere dann die Maske um Oktal- und Hexadezimalzahlen.',
  BINARY: 'Binärzahl',
  DECIMAL: 'Dezimalzahl',
}

const BinaryInt = ({ binaryNumber, decimalNumber }) => {
  return (
    <Task
      route={routes.Tasks.numberBases}
      task={Strings.TASK}
      title={Strings.TITLE}
    >
      <div className={Styles.root}>
        <div className={Styles.solution}>
          <div className={Styles.container}>
            <NavLink
                as={Link}
                to={routes.Solutions.numberBases}
            >
              Lösung
            </NavLink>
          </div>
          <div className={Styles.container}>
          </div>
        </div>
      </div>
    </Task>
  );
};

BinaryInt.propTypes = {
  binaryNumber: PropTypes.number.isRequired,
  decimalNumber: PropTypes.number.isRequired,
};

export default BinaryInt;
