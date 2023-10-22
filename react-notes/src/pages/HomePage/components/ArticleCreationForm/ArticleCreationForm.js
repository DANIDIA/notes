import './ArticleCreationForm.styles.css';
import { ArticleForm } from '../../../../components/ArticleForm';

export const ArticleCreationForm = () => {
    return <ArticleForm intentType="create" buttonText="Add article" />;
};

export default ArticleCreationForm;
