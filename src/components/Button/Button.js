import styles from './Button.module.css';

export function Button({ children, ...params }) {
    return (
        <button {...params} className={`${styles.button} ${params.className}`}>
            {children}
        </button>
    );
}
