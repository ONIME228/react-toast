import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const defaultVariant = VARIANT_OPTIONS[0];
export const ToastsContext = React.createContext();

function ToastPlayground() {
    const [message, setMessage] = React.useState("");
    const [variant, setVariant] = React.useState(defaultVariant);
    const [toasts,setToasts] = React.useState([]);


    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>
            <ToastsContext.Provider value={[toasts,setToasts]}>
                <ToastShelf toasts={toasts}/>
            </ToastsContext.Provider>
            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: "baseline" }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id="message"
                            className={styles.messageInput}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const newToasts = [...toasts,{
                            key:Math.random(),
                            message,
                            variant,
                        }];
                        setToasts(newToasts);
                        console.log('toasts',newToasts);
                        setMessage('');
                        setVariant(defaultVariant);
                    }}
                >
                    <div className={styles.row}>
                        <div className={styles.label}>Variant</div>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            {VARIANT_OPTIONS.map((option) => (
                                <label htmlFor={option} key={option}>
                                    <input
                                        id={option}
                                        type="radio"
                                        name="variant"
                                        value={option}
                                        checked={variant === option}
                                        onChange={(e) =>
                                            setVariant(e.target.value)
                                        }
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label} />
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            <Button>Pop Toast!</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ToastPlayground;
