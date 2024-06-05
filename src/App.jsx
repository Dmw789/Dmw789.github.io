import React from 'react'
import Navbar from './components/navbar.jsx'
import Floater from './components/floater.jsx'
import AboutMe from './components/aboutme.jsx'
import Blog from './components/blog.jsx'
import Contact from './components/contact.jsx'
import Projects from './components/projects.jsx'
import {useState} from 'react';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './index.css'


function App(){
    const headers = [{label: "Dylan Whitehead", link: "#about-me"}, {label: "Projects", link: "#projects"}, {label: "Blog", link: "#blog"}, {label: "Resume / Contact", link: "#contact"}];
    const icons = [{label: "linkedIn", image: faLinkedin, link: "https://www.linkedin.com/in/dylanmwhitehead"}, {label: "github", image: faGithub, link: "https://github.com/Dmw789"}]
    const name = "Dylan Whitehead, Software Developer";
    const ramble = `For as long as I can remember, gaming has meant a lot to me. Whether that be connecting with family and friends 
                    through shared adventures or relishing in moments that meant more than the game itself. As I played more, I found 
                    an intense admiration for designers who created stories and experiences capable of having such profound impacts on me. 
                    It was in that admiration that I began recreating my favorite games into new encounters for anybody who would sit and play them. 
                    My life really changed after getting my Bachelor's in Computer Science and working in the software field for the first time.
                    Whereas before I just wanted to recreate old experiences, I now have the tools and knowledge to create new ones. I believe that 
                    technical design is the heart of the intense feeling gaming conveys. I've found that just like others helped in creating a 
                    foundation for myself and my skills, the key to creating incredible games is designing a healthy foundation for its mechanics 
                    and systems.
                    `;
    const projects = [{label: "Investifull", link: "", image:"assets/in1.PNG", description: "Old project that needs to be replaced", preview:"assets/in1.PNG"}, {label: "Do the Lawn", link: "", image:"assets/dtl1.png", description: "A 3D chore-based chaos simulator. Developed in Unreal Engine 4.", preview:"assets/dtl.gif"}, {label: "Project Gradual", link: "", image:"assets/pg1.png", description: "A 3D racing game inspired by anti-gravity racers of the 90's. Developed in Unreal Engine 4 using C++ in Visual Studio.",  preview:"assets/pg.gif"}, {label: "Manorbound", link: "", image:"assets/mb1.PNG", description: "A 3D horror game where 1-4 players have to go around solving puzzles in order to solve the mystery of the haunted manor. Developed in Unreal Engine 4.",  preview:"assets/mb.gif"}, {label: "Independent Study", link: "", image:"assets/bg1.PNG", description: "Old project. Needs to be replaced.",  preview:"assets/bg1.PNG"}]
    const posts = [{label: "About This Blog", link: "", image: "assets/pg1.png", description: "abc"}, {label: "The Anti-Gravity Effect", link: "", image: "assets/pg1.png", description: "abc"}, {label: "On Fighting Games and 'Arbitrary' Mechanics", link: "", image: "assets/pg1.png", description: "abc"}, {label: "At Bat For Hard Mode", link: "", image: "assets/pg1.png", description: "abc"}];

    const [highlightId, setHighlightId] = useState(2);
    const highlightIdChange = (change) => {
        setHighlightId(change)
    }
    
    return(
        <div className="scrolling">
            {/* <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/> */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300&family=Kanit:wght@300&display=swap" rel="stylesheet"/>
            <Navbar className="font-primary" headers={headers}/>

            <div id="about-me" className="panel bg-white reveal font-secondary">
                <AboutMe name={name} ramble={ramble}/>
            </div>
            
            <div id="projects" className="panel bg-midnight-green font-primary">
                <Projects projects={projects} highlightId={highlightId} onChange={highlightIdChange}/>
            </div>

            <div id="blog" className="panel bg-lemon-chiffon font-primary">
                <Blog posts={posts}/>
            </div>

            <div id="contact" className="panel bg-white font-primary">
                <Contact icons={icons}/>
            </div>

            <Floater icons={icons}/>
        </div>
    )
}

export default App;