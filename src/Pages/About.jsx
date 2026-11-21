/* 
About.jsx: Second page of the Portfolio
*/
import { FaGithub, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { SixteenthNotes, Gamepad2, FerrisWheel, Palette } from 'lucide-react'
import { Button } from '../Components/Button.jsx'
import { GlobeIcon } from '../Components/GlobeIcon.jsx'
import me from '../assets/me.png'
import './About.css'


export function About() {
    console.log('About page rendered...')
    
    return (
        <main className="about">
            {/* Page heading */}
            <header className="about-header">
                <h1>
                    Welcome to my <span>world</span>
                    <GlobeIcon className="about-globe" size="0.75em" />
                </h1>
            </header>

            {/* Introduction */}
            <section className="about-intro">
                {/* My picture */}
                <div className="about-image">
                    <img src={me} alt="Julia's picture"/>
                </div>

                {/* Text introduction */}
                <section className="about-content">
                    <p className="about-description">
                        My name is Julia, a <strong>Mexico-based</strong> Mechatronics Engineer with an M.Sc. in Applied Artificial Intelligence.
                    </p>
                    <p className="about-description">
                        I've always enjoyed asking myself how things work, then working hard until I find an answer. 
                        That led me to study Mechatronics Engineering, where I discovered my passion for combining 
                        mathematics, programming, and engineering to solve real-world problems.
                    </p>
                    <p className="about-description">
                        For the past <strong>three years</strong>, I've worked as a Software Development Engineer in Test (SDET), specializing in 
                        iOS software quality and test automation using Python.
                    </p>
                    <p className="about-description">
                        Over time, my interests have expanded beyond physical systems to software engineering, machine learning, 
                        and artificial intelligence.
                    </p>
                    <p className="about-description">
                        I created this portfolio to share my engineering journey, the projects I've worked on, 
                        and the ideas I'm excited to explore. <strong>Let's connect!</strong>
                    </p>

                    <section className="about-socials">
                        <Button 
                        variant="filled"
                        shape="circle"
                        href="https://github.com/kaudrawmich"
                        target="_blank"
                        ariaLabel="GitHub"
                        >
                        <FaGithub size={24} />
                        </Button>

                        <Button 
                        variant="filled"
                        shape="circle"
                        href="https://www.instagram.com/art.by.julypin"
                        target="_blank"
                        ariaLabel="Instagram"
                        >
                        <FaInstagram size={24} />
                        </Button>

                        <Button 
                        variant="filled"
                        shape="circle"
                        href="https://www.youtube.com/@itsjulypin"
                        target="_blank"
                        ariaLabel="YouTube"
                        >
                        <FaYoutube size={24} />
                        </Button>

                        <Button 
                        variant="filled"
                        shape="circle"
                        href="https://www.linkedin.com/in/juliapinedo"
                        target="_blank"
                        ariaLabel="LinkedIn"
                        >
                        <FaLinkedinIn size={24} />
                        </Button>
                    </section>
                </section>
            </section>

            {/* Divider */}
            <hr className="about-divider" />

            <section className="about-interests">
                <h2> Beyond work... </h2>
                <div className="about-interests-grid">
                    <div className="interest-card">
                        <SixteenthNotes size={32} />
                        <h3>Music</h3>
                    </div>
                    <div className="interest-card">
                        <Palette size={32} />
                        <h3>Art</h3>
                    </div>
                    <div className="interest-card">
                        <FerrisWheel size={32} />
                        <h3>Roller Coasters</h3>
                    </div>
                    <div className="interest-card">
                        <Gamepad2 size={32} />
                        <h3>Videogames</h3>
                    </div>
                </div>
                <p className="about-interests-description">
                    I enjoy learning new things and solving tricky problems.
                    Whatever challenges me to think harder, I’m all in!
                </p>
            </section>
        </main>
    )
}
