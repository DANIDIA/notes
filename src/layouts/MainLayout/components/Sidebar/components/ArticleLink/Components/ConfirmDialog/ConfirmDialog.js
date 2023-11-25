import React from 'react';
import { confirmable } from 'react-confirm';
import classNames from 'classnames';

import styles from './ConfirmDialog.module.css';

export const ConfirmDialog = confirmable(
    ({ show, proceed, confirmDialogText }) => {
        return (
            <div
                className={classNames(styles.confirmDialogContainer, {
                    [styles.notActive]: !show,
                })}
            >
                <div className={styles.confirmDialog}>
                    <div className={styles.confirmDialogText}>
                        {confirmDialogText}
                    </div>
                    <div className={styles.btnContainer}>
                        <button
                            className={styles.btn}
                            onClick={() => proceed(false)}
                        >
                            Cancel
                        </button>
                        <button
                            className={styles.btn}
                            onClick={() => proceed(true)}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        );
    },
);
