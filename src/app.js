import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

const AppLayout = ()=>{
    return (
        <div className="app">
        <Header />
        <Body />
        
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))


// to render react component we will <Component_name />
root.render(<AppLayout />)
