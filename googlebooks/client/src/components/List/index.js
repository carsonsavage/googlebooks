import React from "react";
import { Row, Col } from "../Grid";
import "./style.css";

export function List({ children }) {
    return (
        <div className="list-overflow-container my-5">
            <ul className="list-group">{children}</ul>
        </div>
);
}


export function ListItem({ children }) {
    return <li className="list-group-item">
        {children}
    </li>;
}
