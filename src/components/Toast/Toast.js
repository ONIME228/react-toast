import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastsContext } from '../ToastProvider/ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({children,variant='notice', id}) {
  const Icon = ICONS_BY_VARIANT[variant];
  const [toasts,setToasts] = React.useContext(ToastsContext);
  const closeHandle = (e) => {
    if (e.type === 'click' || e?.code === 'Enter') {
      const newToasts = toasts.filter(toast=>toast.key !== id);
      setToasts(newToasts);
    }
  }
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
      <span className="VisuallyHidden_wrapper">
          {variant}
      </span>
        {children}
      </p>
      <button 
        className={styles.closeButton} 
        onClick={closeHandle}
        onKeyDown={closeHandle}
        aria-label="Dismiss message" 
        aria-live="off"
        >
        <X size={24}/>
      </button>
    </div>
  );
}

export default Toast;
