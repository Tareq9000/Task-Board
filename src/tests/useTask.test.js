import generateTaskContext, {
  createTaskHandler,
  changeTaskStatusHandler,
  CREATE_TASK,
  SET_TASK_DONE,
  SET_TASK_IN_PROGRESS,
  statusToDo,
  statusProgress,
  statusDone,
  reducer,
  initialState
} from '../hooks/useTask';
import React from 'react';

const mockProps = {
  title: 'TTitle',
  description: 'desc',
  status: {
    color: 'red',
    btn: 'start'
  },
  id: 0
};
describe('useTask test', () => {
  it('should dispatch on using createTaskHandler()', () => {
    let mockfn = jest.fn();
    let title = 'title';
    let description = 'description';

    createTaskHandler(mockfn, title, description);

    expect(mockfn).toHaveBeenCalledWith({
      type: CREATE_TASK,
      payload: {
        task: {
          title: title,
          description: description
        }
      }
    });
  });

  it('should dispatch with SET_TASK_IN_PROGRESS on using changeTaskStatusHandler()', () => {
    let mockfn = jest.fn();
    let id = 0;

    changeTaskStatusHandler(mockfn, id, statusToDo);

    expect(mockfn).toHaveBeenCalledWith({
      type: SET_TASK_IN_PROGRESS,
      payload: { id: id }
    });
  });

  it('should dispatch with SET_TASK_DONE on using changeTaskStatusHandler()', () => {
    let mockfn = jest.fn();
    let id = 0;

    changeTaskStatusHandler(mockfn, id, statusDone);

    expect(mockfn).toHaveBeenCalledWith({
      type: SET_TASK_DONE,
      payload: { id: id }
    });
  });

  it('should return the initial state', () => {
    expect(reducer(initialState)).toBe(initialState);
  });

  it('should create a task', () => {
    let action = {
      type: CREATE_TASK,
      payload: {
        task: {
          title: 'title',
          description: 'description'
        }
      }
    };
    let newState = {
      tasks: [
        {
          title: 'title',
          id: 0,
          description: 'description',
          status: statusToDo
        }
      ]
    };
    expect(reducer(initialState, action)).toBe(newState);
  });

  it('should change the status of the task to in progress', () => {
    let action = {
      type: SET_TASK_IN_PROGRESS,
      payload: { id: 0 }
    };
    let state = {
      tasks: [
        {
          title: 'title',
          id: 0,
          description: 'description',
          status: statusToDo
        }
      ]
    };
    let newState = {
      tasks: [
        {
          title: 'title',
          id: 0,
          description: 'description',
          status: statusProgress
        }
      ]
    };
    expect(reducer(state, action)).toBe(newState);
  });

  it('should change the status of the task to done', () => {
    let action = {
      type: SET_TASK_DONE,
      payload: { id: 0 }
    };
    let state = {
      tasks: [
        {
          title: 'title',
          id: 0,
          description: 'description',
          status: statusProgress
        }
      ]
    };
    let newState = {
      tasks: [
        {
          title: 'title',
          id: 0,
          description: 'description',
          status: statusDone
        }
      ]
    };
    expect(reducer(state, action)).toBe(newState);
  });
});
