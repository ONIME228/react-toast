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
import { ToastsContext } from '../ToastPlayground/ToastPlayground';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({children,variant='notice', id}) {
  const Icon = ICONS_BY_VARIANT[variant];
  const [toasts,setToasts] = React.useContext(ToastsContext);

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button className={styles.closeButton}>
        <X size={24} onClick={()=>{
          const newToasts = toasts.filter(toast=>toast.key !== id);
          setToasts(newToasts);
        }}/>
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
