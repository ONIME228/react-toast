import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastsContext = React.createContext();

function ToastProvider({children}) {
  const [toasts,setToasts] = React.useState([]);
  useEscapeKey(() => setToasts([]));

  function addToast({message, variant}) {
    const nextToasts = [
      ...toasts,
      {
        key: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }


  
  return (
    <ToastsContext.Provider value={{toasts,addToast,dismissToast}}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
