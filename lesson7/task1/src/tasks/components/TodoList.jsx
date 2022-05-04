import React, { Component } from 'react';
import TasksList from './TasksList';
import PropTypes from 'prop-types'
import CreateTaskInput from './CreateTaskInput';
import { sortedTasksListSelector } from '../tasks.selectors';
import { connect } from 'react-redux';
import * as tasksAktion  from '../tasks.actions'


class TodoList extends Component {
  
  componentDidMount() {
    this.props.getTaskList()
  }
  
  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.props.updateTask}
            handleTaskDelete={this.props.deleteTask}
          />
        </main>
      </>
    );
  }
}

const mapDispatch = {
  getTaskList: tasksAktion.getTaskList,
  updateTask: tasksAktion.updateTask,
  deleteTask: tasksAktion.deleteTask,
  createTask: tasksAktion.createTask,
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
 }

TodoList.propTypes = {
  getTaskList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};


export default connect(mapState, mapDispatch)(TodoList);
