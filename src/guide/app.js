import React, {Component} from "react";
import "mini.css";
import "./app.css";
import SideBar from "./components/side_bar/side_bar";
import {HeaderNav} from "./components/header/header";
import {LibraryCanvas} from "./components/canvas/canvas";
import {HashRouter} from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="app">
                    <HeaderNav/>
                    <div className="app-canvas">
                        <SideBar/>
                        <LibraryCanvas/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}
