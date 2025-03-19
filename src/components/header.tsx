import React from "react";
import { Link } from "react-router-dom";

export default function Header(): React.ReactElement {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/another-page`}>Another page</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
