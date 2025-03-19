import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header(): React.ReactElement {
    const location = useLocation();
    const { pathname } = location;

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link
                            to={`/`}
                            className={pathname === "/" ? "active" : ""}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/another-page`}
                            className={pathname === "/another-page" ? "active" : ""}
                        >
                            Another page
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
