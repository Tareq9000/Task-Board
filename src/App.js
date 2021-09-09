import React from 'react';
import './style.css';
import TaskCreator from './components/TaskCreator';
import TaskBoard from './components/TaskBoard';
import generateTaskContext from './hooks/useTask';

const [TaskContextProvider, useTaskContext] = generateTaskContext();
export const useTContext = () => useTaskContext();

const App = () => {
  return (
    <TaskContextProvider>
      <TaskBoard />
      <TaskCreator />
    </TaskContextProvider>
  );
};
export default App;
