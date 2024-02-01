import React from 'react';
import PropTypes from 'prop-types';

import Task from '../../../components/Task/Task';

import Styles from './NumberToInvertedArray.module.css';
import routes from "../../../routes";

const Strings = {
	TITLE: '7) Zahl in umgekehrtes Array umwandeln',
	TASK: 'Wandele die Ziffern einer Zahl in ein Array in umgekehrter Reihenfolge um. 987654321 -> [1,2,3,4,5,6,7,8,9].',
	NUMBER: 'Ausgangszahl',
	INVERTED_ARRAY: 'Array',
};

const NumberToInvertedArray = ({ number, invertedArray }) => {
	return (
		<Task
			route={routes.Tasks.numberToInvertedArray}
			title={Strings.TITLE}
			task={Strings.TASK}
		>
			<div className={Styles.root}>
				<div
					className={Styles.title}
				>{`${Strings.NUMBER}: ${number}`}</div>
				<div className={Styles.solution}>
					<div className={Styles.container}>
						<div>
							<div
								className={Styles.title}
							>{`${Strings.INVERTED_ARRAY}: ${invertedArray}`}</div>
						</div>
						<div>Noch keine Lösung</div>
					</div>
				</div>
			</div>
		</Task>
	);
};

NumberToInvertedArray.propTypes = {
	number: PropTypes.number.isRequired,
	invertedArray: PropTypes.array.isRequired,
};

export default NumberToInvertedArray;
