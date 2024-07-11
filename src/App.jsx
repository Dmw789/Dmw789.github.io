import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Floater from './components/floater.jsx';
import Home from './pages/home.jsx';
import Caveman from './pages/caveman.jsx'
import Gradual from './pages/gradual.jsx'
import ScrollToTop from './components/scrollToTop.jsx';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.css';

function App() {
    const icons = [
        { label: "linkedIn", image: faLinkedin, link: "https://www.linkedin.com/in/dylanmwhitehead" },
        { label: "github", image: faGithub, link: "https://github.com/Dmw789" }
    ];

    return (
        <div className="scrolling">
             <ScrollToTop />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300&family=Kanit:wght@300&display=swap" rel="stylesheet" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/caveman" element={<Caveman/>} />
                <Route path="/gradual" element={<Gradual/>} />
                {/* Add more project routes here as needed */}
            </Routes>
            <Floater icons={icons} />
        </div>
    );
}

export default App;