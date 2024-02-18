import ReactDOM from "react-dom/client";
import React from "react";
import { render } from "react-dom";


const heading=React.createElement("h1",{},"Heading1")

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)