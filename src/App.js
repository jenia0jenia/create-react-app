import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/menu/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import RandomQuote from "./pages/RandomQuote";
import TextRandom from "./pages/TextRandom";
// import Tasker from "./pages/Tasker";
import Nasa from "./pages/Nasa";

import "./styles/App.css";
import Container from '@mui/material/Container';

function App() {
    return (
        <div className="App">
            <Container>
                <div className="content">
                    <BrowserRouter>
                        <Menu></Menu>
                        <Routes>
                            <Route path="/">
                                <Route index element={<Home />} />
                                <Route path="text" element={<RandomQuote />} />
                                <Route path="text-random" element={<TextRandom />} />
                                <Route path="nasa" element={<Nasa />} />
                                {/* <Route path="/tasker" element={<Tasker />} /> */}
                                <Route path="about" element={<About />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </Container>
        </div>
    );
}

export default App;
