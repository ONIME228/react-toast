import React from 'react';
import { ToastsContext } from '../components/ToastProvider/ToastProvider';

function useEscapeKey() {
    const [toasts,setToasts] = React.useContext(ToastsContext);

    React.useEffect(()=>{
        const clearToastsOnEsc = (e)=> {
            if (e.code === "Escape") {
                setToasts([]);
            }
        };
        document.addEventListener('keydown',clearToastsOnEsc);

        return () => document.removeEventListener('keydown',clearToastsOnEsc);
    },[]);
}

export default useEscapeKey;