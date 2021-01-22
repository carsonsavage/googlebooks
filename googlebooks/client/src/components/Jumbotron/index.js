import React from "react";


const jumbotronStyle = {
    height: 300, 
    clear: "both", 
    paddingTop: 100, 
    textAlign: "center",
    backgroundColor: "#EBECF0",
    color: "#391F44"
}

function Jumbotron({ children }) {
return (
    <div
        style={ jumbotronStyle }
        className="jumbotron"
    >
        {children}
    </div>
);
}

export default Jumbotron;