import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js"; 
import { createBrowserRouter,RouterProvider,Outlet  } from "react-router-dom";
import About from "./components/about.js";
import Error from "./components/Error.js";
import ContactUs from "./components/contactUs.js";

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            {/* if path is / we should print <Body /> 
                if path is /About we should have <About />
                    if path is /contact we should have <ContactUs />   */}
            <Outlet />
        </div>
    )
}


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },    
            {
            path:"/about",
            element:<About />
        },
        {
            path:"/contact",
            element:<ContactUs />
        }],
        errorElement:<Error />
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
