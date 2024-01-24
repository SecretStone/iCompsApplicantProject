import React from 'react';
import PropTypes from 'prop-types';

import Task from '../../../components/Task/Task';

import Styles from './CaesarChiffre.module.css';
import routes from "../../../routes";

const Strings = {
  TITLE: '6) Cäsar Chiffre',
  TASK: 'Entschlüssele die folgende Cäsar Chiffre.',
  ENCRYPTED: 'Verschlüsselt',
  DECRYPTED: 'Entschlüsselt',
}

const CaesarChiffre = ({encrypted, decrypted, secretKey}) => {
  return (
    <Task
      route={routes.Tasks.ceasarChiffre}
      title={Strings.TITLE}
      task={Strings.TASK}
    >
      <div>{`Schlüssel: ${secretKey}`}</div>
      <div className={Styles.root}>
        <div className={Styles.container}>
          <div className={Styles.title}>{Strings.ENCRYPTED}</div>
          <div className={Styles.encrypted}>{`"${encrypted}"`}</div>
        </div>
        <div className={Styles.container}>
          <div className={Styles.title}>{Strings.DECRYPTED}</div>
          <div className={Styles.decrypted}>{`"${decrypted}"`}</div>
        </div>
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
