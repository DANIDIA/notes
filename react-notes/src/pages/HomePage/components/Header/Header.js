import { Form, useSubmit } from 'react-router-dom';

import styles from './Header.moudle.css';

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
        <div>
            <Form onChange={handleImportFormChange} method="post">
                <button name="intent" value="export" type="submit">
                    Export articles
                </button>
                <label className={styles.inputLable}>
                    Import articles
                    <input name="import" type="file" />
                </label>
            </Form>
        </div>
    );
};
