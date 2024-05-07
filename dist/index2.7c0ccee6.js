console.log("React", React);
console.log("ReactDOM", ReactDOM);
const heading1 = React.createElement("h1", {
    className: "heading"
}, "heading1");
const heading2 = React.createElement("h3", {
    className: "heading"
}, "heading3");
const container1 = React.createElement("div", {
    className: "container"
}, [
    heading1,
    heading2
]); //
const root = ReactDOM.createRoot(document.getElementById("root")); //creating
root.render(container1);

//# sourceMappingURL=index2.7c0ccee6.js.map
