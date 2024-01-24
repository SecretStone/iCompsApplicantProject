import React from 'react';
import PropTypes from 'prop-types';

import Task from '../../../components/Task/Task';

import Styles from './InvertString.module.css';
import routes from "../../../routes";

const Strings = {
  TITLE: '4) String invertieren',
  TASK: 'Invertiere den String zunächst mit einer Schleife, danach dann mittels Rekursion.',
  STRING: 'Ausgangsstring',
  INVERT_LOOP: 'Mit Schleife',
  INVERT_RECURSIV: 'Mit Rekursion',
}

const InvertString = ({ string, loopInvertedString, recursivInvertedString }) => {
  return (
    <Task
      route={routes.Tasks.stringInverter}
      title={Strings.TITLE}
      task={Strings.TASK}>
      <div className={Styles.root}>
        <div className={Styles.title}>{`${Strings.STRING}: ${string}`}</div>
        <div className={Styles.solution}>
          <div className={Styles.container}>
            <div>
              <div className={Styles.title}>{`${Strings.INVERT_LOOP}: ${loopInvertedString}`}</div>
            </div>
          </div>
          <div className={Styles.container}>
            <div>
              <div className={Styles.title}>{`${Strings.INVERT_RECURSIV}: ${recursivInvertedString}`}</div>
            </div>
          </div>
        </div>
      </div>
    </Task>
  );
};

InvertString.propTypes = {
  string: PropTypes.string.isRequired,
  loopInvertedString: PropTypes.string.isRequired,
  recursivInvertedString: PropTypes.string.isRequired,
};

export default InvertString;
