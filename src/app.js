import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js"; 
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/about.js";
import ContactUs from "./components/contactUs.js";

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<ContactUs />
    }
])

const root=ReactDOM.createRoot(document.getElementById("root"))


// to render react component we will <Component_name />
root.render(<RouterProvider router={appRouter} />);
