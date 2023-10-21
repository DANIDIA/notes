import { Form, Link, useSubmit } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
    const submit = useSubmit();

    const handleImportFormChange = async (event) => {
        const form = event.currentTarget;
        const fileText = await form.import.files[0].text();
        const formData = new FormData();
        formData.append('intent', 'import');
        formData.append('fileText', fileText);

        submit(formData, { method: 'post' });
    };

    return (
        <div className={styles.header}>
            <Link className={styles.logo}>HOME</Link>
            <Form
                className={styles.exportImportButtons}
                onChange={handleImportFormChange}
                method="post"
            >
                <button
                    className={styles.exportBtn}
                    name="intent"
                    value="export"
                    type="submit"
                >
                    Export articles
                </button>
                <div className={styles.verticalLine}></div>
                <label className={styles.inputLable}>
                    Import articles
                    <input
                        className={styles.fileInput}
                        name="import"
                        type="file"
                    />
                </label>
            </Form>
        </div>
    );
};
