import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                // TODO : Make this redirect to home
                <Route path="/" element={<Home />} />
                <Route index path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
