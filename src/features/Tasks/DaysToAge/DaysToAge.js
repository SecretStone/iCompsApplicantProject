import React from 'react';

import Task from '../../../components/Task/Task';

import Styles from './DaysToAge.module.css';
import routes from "../../../routes";
import {Link, NavLink} from "react-router-dom";

const Strings = {
	TITLE: '3) Tage umrechnen',
	TASK: 'Schreibe eine Funktion, welche Tage in Jahre, Monate und Tage zurückgibt. Bsp: 2221 Tage = 6 Jahre, 1 Monat, 1 Tag.',
	DAYS: 'Tage',
	AGE: 'Tage in Jahre, Monate und Tage',
};

const DaysToAge = () => {
	return (
		<Task
			route={routes.Tasks.daysToAge}
			title={Strings.TITLE}
			task={Strings.TASK}
		>
			<div className={Styles.root}>
				<div className={Styles.solution}>
					<div className={Styles.container}>
						<NavLink
							as={Link}
							to={routes.Solutions.daysToAge}
						>
							Lösung
						</NavLink>
					</div>
				</div>
			</div>
		</Task>
	);
};


export default DaysToAge;
