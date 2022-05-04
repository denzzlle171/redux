import * as tasksGateway from './taskGateway';
import { tasksListSelector } from './tasks.selectors';


export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED'

export const tasksListsResived = (tasksList) => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };
    return action;
};


export const getTaskList = () => {
  const thunkActions = function (dispatch) {
    tasksGateway.fetchTasksList().then((tasksList) =>
      dispatch(tasksListsResived(tasksList))
    );
  };

  return thunkActions;
};


export const updateTask = (taskId) => {
  const thunkActions = function (dispatch, getState) {
const state = getState()
 const taskList = tasksListSelector(state)
    const task = taskList.find((task) => task.id === taskId);
 const updatedTask = {
   ...task,
   done: !task.done,
 };
    tasksGateway
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(getTaskList()));
  };

  return thunkActions;
};


export const deleteTask = (taskId) => {
  const thunkActions = function (dispatch) {
    tasksGateway
      .deleteTask(taskId)
      .then(() => dispatch(getTaskList()));
  };

  return thunkActions;
};

export const createTask = (text) => {
  const thunkActions = function (dispatch) {
const taskData ={
      text,
      done: false,
      createAt: new Date().toISOString,
    }
    tasksGateway.createTask(taskData)
      .then(() => dispatch(getTaskList()));
  };

  return thunkActions;
};