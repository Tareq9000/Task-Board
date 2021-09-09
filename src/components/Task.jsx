import React from 'react';
import styles from '../styles/Task.module.css';
import { changeTaskStatusHandler, statusDone } from './../hooks/useTask';
import { useTContext } from './../App';

const Task = ({ task: { title, description, status, id } }) => {
  const [state, dispatch] = useTContext();
  return (
    <div className={styles.box} style={{ backgroundColor: status.color }}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {status !== statusDone ? (
        <button
          className={styles.btn}
          onClick={() => changeTaskStatusHandler(dispatch, id, status)}
        >
          {status.btnName}
        </button>
      ) : null}
    </div>
  );
};

export default Task;
