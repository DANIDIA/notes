import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops...</h1>

            <br/>

            <p>Here's what happened:</p>

            <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
    );
}

export default ErrorPage;
