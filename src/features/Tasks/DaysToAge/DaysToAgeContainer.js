import React, { Component } from 'react';
import DaysToAge from './DaysToAge';

const DAYS = 2221;

// https://stackoverflow.com/questions/44502866/transform-number-of-days-in-years-months-days-in-javascript
class DaysToAgeContainer extends Component {
	/**
	 * Methode die eine Anzahl Tage in das Format X Jahre, Y Monate Z Tage übersetzt
	 * @param numberOfDays - Anzahl der Tage
	 * @returns {string} - Einen String im Format "6 Jahre, 1 Monat, 1 Tag"
	 */
	daysToAge = (numberOfDays) => {
		return numberOfDays;
	};

	render() {
		return (
			<DaysToAge
				days={DAYS}
				age={this.daysToAge(DAYS)}
			/>
		);
	}
}

export default DaysToAgeContainer;
