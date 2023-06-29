const heading = React.createElement(
    "h1",{
        
    },"Namaste JavaScript!!"
)
const heading1 = React.createElement(
    "h1",{
        
    },"Namaste JavaScript!!1"
)
const heading2 = React.createElement(
    "h2",{
        
    },"Namaste JavaScript!!2"
)
const container = React.createElement(
    "div",{
        id: "container"
        
    },[heading1,heading2]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);
root.render(container);