import React from 'react';
import PropTypes from 'prop-types';

import Task from '../../../components/Task/Task';

import Styles from './DaysToAge.module.css';
import routes from "../../../routes";

const Strings = {
	TITLE: '3) Tage umrechnen',
	TASK: 'Schreibe eine Funktion, welche Tage in Jahre, Monate und Tage zurückgibt. Bsp: 2221 Tage = 6 Jahre, 1 Monat, 1 Tag.',
	DAYS: 'Tage',
	AGE: 'Tage in Jahre, Monate und Tage',
};

const DaysToAge = ({ days, age }) => {
	return (
		<Task
			route={routes.Tasks.daysToAge}
			title={Strings.TITLE}
			task={Strings.TASK}
		>
			<div className={Styles.root}>
				<div className={Styles.title}>
					{`${Strings.DAYS}: ${days}`}
				</div>
				<div className={Styles.solution}>
					<div className={Styles.container}>
						<div>
							<div className={Styles.title}>
								{`${Strings.AGE}: ${age}`}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Task>
	);
};

DaysToAge.propTypes = {
	days: PropTypes.number.isRequired,
	age: PropTypes.string.isRequired,
};

export default DaysToAge;
