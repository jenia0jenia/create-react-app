import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Text from "./pages/Text";

import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="content">
                    <BrowserRouter>
                        <nav className="nav">
                            <ul>
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/text">Text</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route path="/">
                                <Route index element={<Home />} />
                                <Route path="text" element={<Text />} />
                                <Route path="about" element={<About />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default App;
