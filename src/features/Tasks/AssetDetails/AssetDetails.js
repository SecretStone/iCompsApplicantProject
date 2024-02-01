import React from 'react';

import Task from '../../../components/Task/Task';
import routes from "../../../routes";

import Styles from './AssetDetails.module.css';

const Strings = {
  TITLE: '1) Details einer Anlage',
  TASK: 'Visualisiere die verfügbaren Daten (Property data) in einer geeigneten Form. Die Daten entsprechen Stammdaten und Kurse der Amazon-Aktie seit Beginn des Jahres 2022. Beim Verlassen der Aufgabenseite sollen die Daten im Store entfernt werden.',
}

const AssetDetails = () => {
  return (
      <Task
          route={routes.Tasks.assetDetails}
          task={Strings.TASK}
          title={Strings.TITLE}
      >
        <div className={Styles.root}>
          Noch keine Lösung...
        </div>
      </Task>
  );
};


export default AssetDetails;
