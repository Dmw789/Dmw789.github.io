import React from 'react';
import Hero from '../components/hero.jsx';
import BackButton from '../components/backbutton.jsx';
import '../index.css';

function Caveman() {
    return (
        <div className="scrolling">
            <Hero title="Caveman Works a 9-5" subtitle="A 3-D Puzzle Adventure Game" image="assets/cm1.png" />
            <div className="project_page">
                <h1>So, You Wanna Join the STTLLM Appliances Inc Team?</h1>
                <p>
                    <i>How could we blame you!</i> When you're working as part of the STTLLM Appliances Inc team, you're doing more than just contributing to our growing ecosystem of over six clientele — You're joining a family of evolving, intuitive super-minds that are at the vanguard of appliance-based solution technologies. This isn't a scam like real companies, we want to work for you so you work for us. This is your chance, a once-in-a-lifetime opportunity to work for a company that is capable of changing everything about the world whenever it feels like it.
                </p>
                <br/>
                <p>
                    AI. Financial Distribution Systems. Product Licensing Agreements. Appliance Regulational Forfeiture. Ventricles. These are just <i>some</i> of the words we use on a daily basis, and we can say them fast. Every day we live life on the edge, and you will too.
                </p>
                <br/>
                <p>
                    Our sales team does more than try to sell you a pen. We connect with our customers on an hourly basis to make sure they haven't thought of a single thing we can't sell them. I called Jimmy The Fridge's mom about an hour ago, you know how that went? It went REALLY REALLY great! I said "seizable expenditures" like it was NOTHING. She called me over for dinner. I even muted my phone when I had a cough attack and she didn't notice at ALL.
                </p>
                <br/>
                <p>"Civil Disobedience" - see?</p>
                <div className="project_image">
                    <img src="assets/cm2.png" alt="Project Image 1" />
                    <p>"Need a fridge? Weeeeeeeeee got 'em!" - Jimmy 'The Fridge' Poluski</p>
                </div>
                <p>
                    STTLLM Appliances Inc has come a long way since their humble beginnings. Started by discharged military sergeant turned two-time Texas Hold'em state champion, Corporal Russ Tustle, with a small cash injection of four million GooCoin, STTLLM was initially a clown-themed slot machine manufacturer. With company-patented "Dopamine Distribution" neural software, it wasn't long before business really took off, and soon, STTLLM machines were found around every gas station this side of the state. The Corporal himself even purchased several machines for his friends and family!
                </p>
                <br/>
                <p>
                    After a brief vacation away from home, Corporal Russ Tustle mysteriously disappeared but not before leaving all responsibility and shares in the company to the sole ownership of his ERIC. Since then, STTLLM has grown into an industry giant, producing over 200 types of home, work, and vehicle appliances. And the best part? We have <i>no</i> ulterior motives.
                </p>
                <br/>
                <p>
                    Integral to our team is our mission, to get our appliances in every home, workplace, and automobile in the country and to do it with our own proprietary technology that clearly illustrates we are making all of our own products and in no way taking them from a landfill outside of the county.
                </p>
                <br/>
                <div className="project_image">
                    <img src="assets/cm3.png" alt="Project Image 2" />
                    <p>"Need a fridge? Weeeeeeeeee got 'em!" - Jimmy 'The Fridge' Poluski</p>
                </div>
                <p>
                    At STTLLM, sales are important, but what is most important is sticking to our strong set of principles the Corporal left to his ERIC. One of those principles is making sure we always strive to keep our clients happy. 
                    Remember, be sure to end every conversation with a smile left on your face that makes our clients go "Yeah, oh yeah, I'd work with them again!"
                    Here, our clients are our family, and our family are our business benchmarks.
                </p>
                <br/>
                <br/>
                <p>
                    But don't just take our word for it, check out some of our <b>many</b> happy "customers"
                </p>
                <div className="brands">
                    <img src="assets/brand1.png" alt="Brand 1" />
                    <img src="assets/brand2.png" alt="Brand 2" />
                    <img src="assets/brand3.png" alt="Brand 3" />
                    <img src="assets/brand4.png" alt="Branf 4" />
                </div>
                <p>
                    Wow, now that's what I call business! Can I get a fist bump? (relate to them) But that's enough about us. Let's talk about you. As a key part of our Sales Team, you'll be in charge of:
                </p>
                <ul>
                    <li>Utilizing our patented sales-machine technology to engage with interested customers</li>
                    <li>Maintaining company-wide expense reports</li>
                    <li>Playing up to 2 hours in our famous partnered game "Wheels and Barnacles" to earn GooCoin to exchange for time off, performance reviews, or save them up for some cool swag for your time-in-sheet avatar!</li>
                    <li>Replacing rubber straps along the fifth pivot axle of the ERIC management console</li>
                    <li>Responding to our growing user-base with support inquiries</li>
                </ul>
                <br/>
                <p>
                    And if all that doesn't sound exciting enough, you'll also be engaging in more team-building exercises than you can shake a stick at!
                </p>
                <div className="project_image">
                    <img src="assets/cm4.png" alt="Project Image 3" />
                    <p>"Need a fridge? Weeeeeeeeee got 'em!" - Jimmy 'The Fridge' Poluski</p>
                </div>
                <p>
                    Man, that sounds tough! We hear you. But worry no more. STTLLM has partnered with local tech-conglomerate QuatroLateral to bring the productivity straight to you.
                </p>
                <br/>
                <p>
                    With the aid of QL Tech, we'll volunteer you to be part of their early adoption program that pairs you with one of their "SR788Y-ALPHA" models that comes equipped with a personalized version of STLLMM's very own AI Super-Computer ERIC.
                    Finally, we don't have to worry about not getting enough done in a day. Your individulized ERIC bot is now capable of analyzing any and all movements you make, including an eye tracker and breath analyzer and sending that data directly to HR and various partnered advertising agencies. 
                    Oh, but I don't know, that sounds a little too high tech... Don't worry! Our ERIC's are highly configured by our partners to make sure to take as much of your participation out of the process as humanely possible. 
                    Just go about your day as usual and rest easy knowing <i>your</i> ERIC is watching and he is learning.
                </p>
                <br/>
                <br/>
                <p>So what are you waiting for? Come join our pride and joy, baby. Apply today!</p>
                <br/>
                <br/>
                <h2>Download</h2>
                <p>Check back later for updates!</p>
                <br/>
                <br/>
            </div>
            <BackButton />
        </div>
    );
}

export default Caveman;
