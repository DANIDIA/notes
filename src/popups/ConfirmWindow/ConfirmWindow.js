import React from 'react';
import { confirmable } from 'react-confirm';
import classNames from 'classnames';

import styles from './ConfirmWindow.module.css';

export const ConfirmWindow = confirmable(({ show, proceed, conformation }) => {
    return (
        <div
            className={classNames(styles.windowContainer, {
                [styles.notActive]: !show,
            })}
        >
            <div className={styles.window}>
                <div className={styles.text}>{conformation}</div>
                <div className={styles.btnContainer}>
                    <button
                        className={styles.btn}
                        onClick={() => proceed(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className={`${styles.btn} ${styles.deleteBtn}`}
                        onClick={() => proceed(true)}
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
});
