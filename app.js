import React from "react";
import ReactDOM from "react-dom/client";
console.log("React", React);
console.log("ReactDOM", ReactDOM);

const heading1 = React.createElement('h1', { className: "heading1" }, "heading1(aj)");
const heading2 = React.createElement('h3', { className: "heading3" }, "heading3(vj)");

const container1 = React.createElement('div', { className: "container" }, [heading1, heading2]);  //
const root = ReactDOM.createRoot(document.getElementById('root'));  //creating
root.render(container1);