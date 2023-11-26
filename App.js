import React from "react"
import  ReactDOM  from "react-dom/client"

const heading = React.createElement("h1",{className:"parent"},[
    React.createElement("div",{className:"child"},[
        React.createElement("h1",{},"h1 tag"),
        React.createElement("h2",{},"h2 tag shivani paemar")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)