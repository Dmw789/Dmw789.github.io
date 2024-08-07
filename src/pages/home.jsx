import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar.jsx';
import Floater from '../components/floater.jsx';
import AboutMe from '../components/aboutme.jsx';
import Blog from '../components/blog.jsx';
import Contact from '../components/contact.jsx';
import Projects from '../components/projects.jsx';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../index.css';

function Home() {
    const headers = [
        { label: "Dylan Whitehead", link: "#about-me" },
        { label: "Projects", link: "#projects" },
        { label: "Blog", link: "#blog" },
        { label: "Resume / Contact", link: "#contact"}
    ];

    const icons = [
        { label: "linkedIn", image: faLinkedin, link: "https://www.linkedin.com/in/dylanmwhitehead" },
        { label: "github", image: faGithub, link: "https://github.com/Dmw789" }
    ];

    const name = "Dylan Whitehead, Software Developer";
    const ramble = `For as long as I can remember, software has meant a lot to me. Whether that be connecting with family and friends 
                    through shared adventures in gaming or sitting on my own, tinkering around with systems I couldn't yet understand. As I played more, I found 
                    an intense admiration for designers who created experiences capable of having profound impacts on me. 
                    It was in that admiration that I began recreating my favorite games into new encounters for anybody who would sit and play them. 
                    My life really changed after getting my Bachelor's in Computer Science and working in the software field for the first time.
                    Whereas before I just wanted to recreate old experiences, I now had the tools and knowledge to create new ones. I haven't looked back since. 
                    `;

    const [projects, setProjects] = useState([]);
    const [highlightId, setHighlightId] = useState(1);

    const fetchData = async (url, setter) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setter(data);
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error);
        }
    };

    useEffect(() => {
        fetchData('/data/projects.json', (data) => setProjects(data.projects));
    }, []);

    const highlightIdChange = (change) => {
        setHighlightId(change);
    };

    return (
        <div className="scrolling">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300&family=Kanit:wght@300&display=swap" rel="stylesheet" />
            <Navbar className="font-primary" headers={headers} />
            <div id="about-me" className="panel bg-white reveal font-secondary">
                <AboutMe name={name} ramble={ramble} />
            </div>
            <div id="projects" className="panel bg-midnight-green font-primary">
                <Projects projects={projects} highlightId={highlightId} onChange={highlightIdChange} />
            </div>
            <div id="blog" className="panel bg-blog font-primary">
                <Blog/>
            </div>
            <div id="contact" className="panel bg-white font-primary">
                <Contact icons={icons} />
            </div>
            <Floater icons={icons} />
        </div>
    );
}

export default Home;
