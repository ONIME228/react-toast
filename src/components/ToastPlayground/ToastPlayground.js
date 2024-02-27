import React from "react";

import Button from "../Button";
import Toast from "../Toast/Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
const defaultVariant = VARIANT_OPTIONS[0];

function ToastPlayground() {
    const [message, setMessage] = React.useState("");
    const [variant, setVariant] = React.useState(defaultVariant);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    // React.useEffect(() => {
    //     console.log("message", message);
    //     console.log("variant", variant);
    // }, [message, variant]);

    function ToastWrapper({ message, variant, isSubmitted }) {

        if (isSubmitted) return <Toast message={message} variant={variant} />;
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>
            <ToastWrapper message={message} variant={variant} isSubmitted={isSubmitted}/>
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
                        console.log(message, variant);
                        setIsSubmitted(true);
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
