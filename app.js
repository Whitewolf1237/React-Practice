/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>HEading Tag</h1>
 *      </div>
 * </div>
 */


const parent = React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"This is H1 tag"),React.createElement("h2",{},"This is H2 tag")]
                )
)

// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World")
// (element name,{id,class,etc},text to be inserted)

// this will return an object 
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);
