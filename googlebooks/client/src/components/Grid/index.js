import React from "react";

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Row({ classes, fluid, children }) {
    return <div className={`${classes} row${fluid ? "-fluid" : ""}`}>{children}</div>;
} 


export function Col({ size, children }) {
    return (
        <div
            className={size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")}
    >
        {children}
        </div>
);
}