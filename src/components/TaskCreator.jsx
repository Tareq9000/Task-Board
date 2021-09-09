import React from 'react';
import { createTaskHandler } from './../hooks/useTask';
import { useTContext } from './../App';
import styles from '../styles/TaskCreator.module.css';

const TaskCreator = () => {
  const [state, dispatch] = useTContext();

  let titleInput = React.createRef();
  let descriptionInput = React.createRef();

  return (
    <div className={styles.box}>
      <p>create task</p>
      <div className={styles.inputBox}>
        <input type="text" name="title" ref={titleInput} placeholder="title" />
        <textarea
          ref={descriptionInput}
          rows="4"
          cols="30"
          placeholder="description"
        />
      </div>
      <button
        onClick={() =>
          createTaskHandler(
            dispatch,
            titleInput.current.value,
            descriptionInput.current.value
          )
        }
      >
        Create
      </button>
    </div>
  );
};

export default TaskCreator;
