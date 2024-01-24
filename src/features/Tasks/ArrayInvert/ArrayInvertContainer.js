import React, {Component} from 'react';
import ArrayInvert from "./ArrayInvert";

const ARRAY = [1,2,3,4,5,6,7,8,9];

class ArrayInvertContainer extends Component {
  /**
   * Methode, welche ein Array MIT Hilfe eines zweiten Array invertiert.
   * @param array
   */
  invertWithArray = (array1) => {
    let array2 = []
    for (let i in array1) {
      array2[array1.length - i - 1] = array1[i]
    }
    return array2;
  }


  /**
   * Methode, welche ein Array OHNE Hilfe eines zweiten Array invertiert.
   * @param array
   */
  invertWithoutArray = (arr) => {
    let start = 0;
    let ende = arr.length -1;
    while (start < ende) {
      let tmp = arr[start]
      arr[start] = arr[ende]
      arr[ende] = tmp
      start++;
      ende--;
    }
    return arr
  }

  render() {
    return (
      <ArrayInvert
        array={ARRAY}
        arrayWithHelperArray={this.invertWithArray([...ARRAY])}
        arrayWithoutHelperArray={this.invertWithoutArray([...ARRAY])}
      />
    );
  }
}

export default ArrayInvertContainer;

