import { Link, useRouteError } from "react-router-dom";
import React from "react";

export default function NotFound(): React.ReactElement {
    const error: any = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Route not found</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={`/`}>Back to home</Link>
        </div>
    );
}
