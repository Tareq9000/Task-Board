import React, { useReducer, useContext } from 'react';
export const CREATE_TASK = 'create-todo-task';
export const SET_TASK_IN_PROGRESS = 'set-task-in-progress';
export const SET_TASK_DONE = 'set-task-done';

export const initialState = {
  tasks: []
};
export const statusToDo = {
  btnName: 'start',
  color: 'red'
};
export const statusProgress = {
  btnName: 'finish',
  color: 'orange'
};
export const statusDone = {
  btnName: 'delete',
  color: 'lightgreen'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { ...action.payload.task, id: state.tasks.length, status: statusToDo }
        ]
      };
    case SET_TASK_IN_PROGRESS:
      let progressTasks = state.tasks;
      progressTasks[action.payload.id].status = statusProgress;
      return {
        ...state,
        tasks: progressTasks
      };
    case SET_TASK_DONE:
      let doneTasks = state.tasks;
      doneTasks[action.payload.id].status = statusDone;
      return {
        ...state,
        tasks: doneTasks
      };
    default:
      return state;
  }
};

const generateTaskContext = (stateProp = initialState) => {
  const taskContext = React.createContext();
  const useTaskContext = () => useContext(taskContext);

  const TaskContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, stateProp);

    return (
      <taskContext.Provider value={[state, dispatch]}>
        {children}
      </taskContext.Provider>
    );
  };

  return [TaskContextProvider, useTaskContext];
};

export default generateTaskContext;

export const createTaskHandler = (dispatch, title, description) => {
  dispatch({
    type: CREATE_TASK,
    payload: {
      task: {
        title: title,
        description: description
      }
    }
  });
};

export const changeTaskStatusHandler = (dispatch, id, status) => {
  dispatch({
    type: status == statusToDo ? SET_TASK_IN_PROGRESS : SET_TASK_DONE,
    payload: { id: id }
  });
};
