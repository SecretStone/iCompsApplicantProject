import React from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from "react-router-dom";

import {TasksUtil} from "../../utils/tasksUtil/TasksUtil";

import Styles from './Task.module.css';

const Strings = {
  NEXT: 'weiter',
  PREVIOUS: 'zurück',
}

const renderNext = (route) => {
  const nextRoute = TasksUtil.getNextTasksRoute(route);

  if(!nextRoute) return null;

  return (
    <NavLink
      as={Link}
      to={nextRoute}
    >
      {Strings.NEXT}
    </NavLink>
  );
}

const renderPrevious = (route) => {
  const nextRoute = TasksUtil.getPreviousTasksRoute(route);

  if(!nextRoute) return null;

  return (
    <NavLink
      as={Link}
      to={nextRoute}
    >
      {Strings.PREVIOUS}
    </NavLink>
  );
}

const Task = ({route, task, title, children }) => {
  return (
    <div className={Styles.root}>
      <h1 className={Styles.title}>
        {title}
      </h1>
      <div className={Styles.task}>
        {task}
      </div>
      <div className={Styles.solution}>
        {children}
      </div>

      <div className={Styles.navigation}>
        {renderPrevious(route)}
        {renderNext(route)}
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default Task;
