import React from 'react';
import Task from './Task';
import styles from '../styles/TaskBoard.module.css';
import { useTContext } from './../App';
import { statusToDo, statusProgress, statusDone } from './../hooks/useTask';

const TaskBoard = () => {
  const [state] = useTContext();
  const todoTasks = state.tasks.filter(task => task.status === statusToDo);
  const progressTasks = state.tasks.filter(
    task => task.status === statusProgress
  );
  const doneTasks = state.tasks.filter(task => task.status === statusDone);

  return (
    <div className={styles.box}>
      <div className={styles.todoColumn}>
        <div>TO DO</div>
        {todoTasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </div>
      <div className={styles.progressColumn}>
        <div>IN PROGRESS</div>
        {progressTasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </div>
      <div className={styles.doneColumn}>
        <div>DONE</div>
        {doneTasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
