import React, {Component} from 'react';
import BinaryInt from "./BinaryInt";

const BINARY_NUMBER = 0b10101111;

class BinaryIntContainer extends Component {
  convertBinaryToDecimal = (binaryNumber) => {
    return binaryNumber;
  }

  render() {
    return (
      <BinaryInt
        binaryNumber={BINARY_NUMBER}
        decimalNumber={this.convertBinaryToDecimal(BINARY_NUMBER)}
      />
    );
  }
}

BinaryIntContainer.defaultProps = {};

BinaryIntContainer.propTypes = {};

export default BinaryIntContainer;
