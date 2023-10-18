import styles from './Button.module.css';

export function Button({ children, className, style,  }) {
    return (
        <button
            style={{ ...style }}
            className={`${styles.button} ${className}`}
        >
            {children}
        </button>
    );
}
