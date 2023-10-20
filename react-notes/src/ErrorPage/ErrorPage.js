import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return <div>oops...</div>;
}

export default ErrorPage;
