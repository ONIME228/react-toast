import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts}) {
  return (
    <ol className={styles.wrapper}>
      <li className={styles.toastWrapper}>
        {toasts.map(({message,variant,key})=>(
          <Toast key={key} id={key} variant={variant}>{message}</Toast>
        ))}
      </li>
    </ol>
  );
}

export default ToastShelf;
