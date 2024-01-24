import React, { Component } from 'react';
import NumberToInvertedArray from './NumberToInvertedArray';

const NUMBER = 123456789;

class NumberToInvertedArrayContainer extends Component {
	/**
	 * Methode, die eine Zahl splittet und in ein invertiertes Array überführt
	 * @param number - eine beliebige Zahl
	 * @returns {number[]} - Ein Array, das die einzlnen Ziffern in umgekehrter Reihenfolge enthält
	 */
	numberToInvertedArray = (number) => {
		return number
	};

	render() {
		return (
			<NumberToInvertedArray
				number={NUMBER}
				invertedArray={this.numberToInvertedArray([NUMBER])}
			/>
		);
	}
}

export default NumberToInvertedArrayContainer;
