const heading = React.createElement("h1",{class:"parent"},[
    React.createElement("div",{class:"child"},[
        React.createElement("h1",{},"he tag"),
        React.createElement("h2",{},"h2 tag")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)