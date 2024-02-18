import ReactDOM from "react-dom/client";
import React from "react";
import { render } from "react-dom";


// const Heading=<h1 className="head" tabIndex="5">HEADING THROUGH JSX</h1>

//functional Component

const number=100000

const Title=()=>
    (   
            <h1 className="heading">Title component</h1>
    );
const HeadingComponent=()=>
    (   
        <div id="container">
            <Title></Title>
            {Title()}
            
            <h1 className="heading">Functional Component test case</h1>
            {<h2>{number}</h2>}
        </div>
    );

const root=ReactDOM.createRoot(document.getElementById("root"))


// to render react component we will <Component_name />
root.render(<HeadingComponent />)
