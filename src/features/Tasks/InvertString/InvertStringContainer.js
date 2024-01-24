import React, {Component} from 'react';
import InvertString from './InvertString';

const STRING = 'HbmG spmoCi';

class InvertStringContainer extends Component {
  invertWithLoop = (string) => {
    return string;
  }

  invertWithRecursion = (string) => {
    return string;
  }

  render() {
    return (
      <InvertString
        string={STRING}
        recursivInvertedString={this.invertWithRecursion(STRING)}
        loopInvertedString={this.invertWithLoop(STRING)}
      />
    );
  }
}

InvertStringContainer.defaultProps = {};

InvertStringContainer.propTypes = {};

export default InvertStringContainer;
