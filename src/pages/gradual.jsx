import React from 'react';
import Hero from '../components/hero.jsx';
import BackButton from '../components/backbutton.jsx';
import '../index.css';

function Gradual() {
    return (
        <div className="scrolling">
            <Hero title="Project Gradual" subtitle="Anti-Gravity Racing" image="assets/pg1.png" />
            <div className= "project_page">
                <h1>3D Racing Throwback</h1>
                <p>
                    <b>Role: </b>Project Manager, Lead Designer, Lead Programmer
                </p>
                <p>
                    <b>Engine: </b>Unreal Engine 4
                </p>
                <p>
                    <b>Language: </b>C++
                </p>
                <p>
                    <b>Dev Time: </b>May 2021 - Oct 2021
                </p>
                <br />
                <p>
                    <b>What I learned:</b>
                </p>
                <ul>
                    <li>Quaternion Geometry</li>
                    <li>Linear Algebra</li>
                    <li>Proper C++ coding procedures when working in Unreal Engine 4</li>
                    <li>Spline math and spline mesh usage</li>
                    <li>Implementing/altering music & sound</li>
                    <li>Project Packaging and Shipping</li>
                    <li>Independent team management</li>
                </ul>
                <br />
                <p>
                    This project was initially created as a prototype to show off various functionality taught in courses as part of the "Game Development Track" at Edinboro University. After a few successful showcases and discussions, the project was adapted to
                    be a showcase that would highlight these learned skills as part of presentations and open-houses at the university.
                </p>
                <br />
                <p>
                    One of the most important things we wanted to highlight were mechanics inspired by anti-gravity racers of the 90's like F-Zero X and WipeOut.
                    A lot of care went into making a fully-fleshed out state system that properly controlled the player control while still feeling fluid.
                </p>
                <br />
                <h2>Prototyping</h2>
                <p>
                    Many different prototypes, and iterations on those prototypes, were developed to get the overall feel and control scheme correct.
                    Balancing ship statistics like speed, acceleration, and turning, as well as camera statistics like interpolation speed needed to be very finely tuned to get across the intended game feel.
                    A separate prototype was also constructed to design and test the algorithm needed for the rotations and physics of the ship.
                </p>
                <br />
                <h2>Designing</h2>
                <p>
                    After certain functionality was mapped out, priority shifted to designing a playable and robust demo that would showcase the custom movement and physics. 
                </p>
                <ul>
                    <li>Sound design</li>
                    <li>Character design</li>
                    <li>Level Design</li>
                    <li>Graphical Settings</li>
                    <li>Intended Hardware</li>
                </ul>
                <p>
                    Here are some other things that went along with designing the user experience:
                </p>
                <ul>
                    <li>Class hierarchies</li>
                    <li>Class relationships</li>
                    <li>Function narratives and conditions</li>
                    <li>Algorithm design</li>
                    <li>Necessary Libraries</li>
                </ul>
                <br />
                <h2>Development</h2>
                <p>
                    When full development began the majority of the design was already completed. The work that remained was coding the various classes in C++ and laying everything out in the editor.
                </p>
                <ul>
                    <li>A base ship class</li>
                    <li>Three children of the ship class</li>
                    <li>A track class</li>
                    <li>A track manager</li>
                    <li>A game mode</li>
                    <li>A player controller</li>
                </ul>
                <p>
                    The game mode and controller were developed first. Both were standard implementations that defined player functionality, UI spawning/despawning, and player possession.
                    Once that was completed, the ship class was programmed, following the design laid out previously. Basic player possession was linked to the game mode, as well as the ability to take input and output a predictable result based on the input provided. Next, the behavior of the ship's movement, which included acceleration and velocity, as well as gravity. This was important to make sure the previous step was implemented efficiently as well as to set up the next step since testing required to be done during runtime. The next step was programming the rotation of the ship using the algorithm we designed. After this, a state system was created and implemented which allowed for toggling of the anti-gravity functionality. 
                    From this point, the track functionality was expanded from previous prototypes, adding a track manager class that would allow for checkpoint and lap functionality as well as being able to communicate to our game mode. It was important to get this working before moving on with further ship implementation to make sure our rotation algorithm would be compatible with a spline mesh actor and to make sure our 3D assets wouldn't need to be re-adjusted.
                    After this, the ship children classes were made and balancing/level creation began.
                </p>
                <br />
                <h2>Testing</h2>
                <p>
                    After developing the various objects and their behavior, I tested everything by first labeling what I intended to test in spreadsheets including conditions, expected results, and final results making sure to keep everything keyed correctly.
                    Depending on the class function being examined, I tested minimum and maximum conditions, arbitrary middle values, out-of-bounds values, incorrect types, and expected common values.
                    This process took a long time, but it was important to be able to accurately predict what will happen to each function so that authenticity could be determined.
                    This also helped significantly with balancing later as tweaking class constants was as simple as inputting a new value and re-running some quick tests.
                    For more complicated functionality, real-time tests needed to be performed in which case I used a debugging tool to display values during runtime as well as additional tools like line traces. This helped to make sure that functionality such as collision was working properly in multiple different situations without having to test for an astronomically large range of values.
                </p>
                <br />
                <h2>Presenting</h2>
                <p>
                    As part of the MFG Day Conference in Erie, PA on 10/13/21 I displayed the project as part of a presentation given titled “Connecting Skills Developed in 3D Game Development to Careers in Software Engineering”. 
                    The project was also displayed by Edinboro University for student recruitment by the Computer Science Department.
                </p>
                <br />
                <br />
                <BackButton />
            </div>
        </div>
    );
}

export default Gradual;
