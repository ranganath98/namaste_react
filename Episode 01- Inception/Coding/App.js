
/* <div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

ReactElement(Object) => HTML(Browser Understand)
 */



const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [
        React.createElement("div", {id:"child1"}, 
            [
                React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")
            ]
        ),
        React.createElement("div", {id:"child2"}, 
            [
                React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")
            ]
        )
    ]

)

// due to code complexity. JSX comes into picture.

// console.log(parent); // Object

// const heading = React.createElement("h1", {id:"root", xyz:"abc"}, "Hello World from React!"); // core react is responsible for create element
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root")); // react dom is responsible for create root element
console.log(root);

root.render(parent); // render heading in root element
