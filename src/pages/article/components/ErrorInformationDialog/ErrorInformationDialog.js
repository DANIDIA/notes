import React from 'react';
import classNames from 'classnames';
import { confirmable } from 'react-confirm';

import styles from './ErrorInformationDialog.module.css';

export const ErrorInformationDialog = confirmable(
    ({ show, proceed, errorInfo }) => {
        const errorTexts = {
            404: 'ERROR: articles not found',
        };

        const errorText = errorTexts[errorInfo];

        return (
            <div
                className={classNames(styles.dialogContainer, {
                    [styles.notActive]: !show,
                })}
            >
                <div className={styles.dialog}>
                    <div className={styles.dialogText}>{errorText}</div>
                    <div className={styles.btnContainer}>
                        <button
                            onClick={() => proceed(true)}
                            className={styles.btn}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        );
    },
);
