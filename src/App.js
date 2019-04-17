import React, { Component } from "react";
// import Favicon from 'react-favicon';
// import {favicon} from 'favicon.js';
import favicon from "favicon.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <Favicon url={Array(59).fill("/favicon-images/tmp-").map((item, index) => item + index+".gif")}/> */}
                {favicon.animate(Array(59).fill("/favicon-images/tmp-").map((item, index) => item + index + ".gif"), 100)}
                <h1> Hello, World! </h1>
            </div>
        );
    }
}

export default App;