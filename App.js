import React from "react";
import ReactDOM from "react-Dom/client";


const heading = React.createElement("h1",  {style  : { color: "green" }}, "i am h1 element");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading,root);
