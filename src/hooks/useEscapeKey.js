import React from 'react';

function useEscapeKey(callback) {

    React.useEffect(()=>{
        const clearToastsOnEsc = (e)=> {
            if (e.code === "Escape") {
                callback();
            }
        };
        document.addEventListener('keydown',clearToastsOnEsc);

        return () => document.removeEventListener('keydown',clearToastsOnEsc);
    },[]);
}

export default useEscapeKey;