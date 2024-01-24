import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {first} from 'lodash';
import {compose} from "redux";

import Home from "./Home";
import {TasksConstants} from "../Tasks/TaskConstants";
import {withRouter} from "react-router-dom";

class HomeContainer extends Component {

  handleOnStart = () => {
    const { history } = this.props;

    history.push(first(TasksConstants.Tasks))
  }

  render() {
    return (
      <Home onStart={this.handleOnStart} />
    );
  }
}

HomeContainer.defaultProps = {};

HomeContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProps));

export default enhance(HomeContainer);

