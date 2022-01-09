import React from 'react';
import './App.css';
import HomePage from './components/home-page';
import About from './components/about';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
