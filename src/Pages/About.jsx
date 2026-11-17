/* 
About.jsx: Second page of the Portfolio
*/
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
                    <p className="about-quote"> "Non est ad astra mollis e terris via"</p>
                    <p className="about-description">
                        My name is Julia, a <strong>Mexico-based</strong> Mechatronics Engineer with an M.Sc. in Applied Artificial Intelligence.
                    </p>
                    <p className="about-description">
                        I've always enjoyed asking myself how things work, then working hard until I find an answer. 
                        That curiosity led me to study Mechatronics Engineering, where I discovered how mathematics, programming, 
                        and mechanical and electrical engineering come together to solve real-world problems.
                    </p>
                    <p className="about-description">
                        For the past <strong>three years</strong>, I've worked as a Software Development Engineer in Test (SDET), specializing in 
                        iOS software quality and test automation using Python. My engineering background has shaped the way I 
                        approach software development, combining analytical thinking, problem-solving, and a commitment to building reliable products.
                    </p>
                    <p className="about-description">
                        Over time, my interests have expanded from physical systems to software engineering, machine learning, and artificial intelligence. 
                        I created this portfolio to connect those parts of my journey:
                        The engineering problems I’ve worked on, 
                        the things I’m learning, 
                        and the ideas I’d like to explore next.
                    </p>
                    <p className="about-description">
                        Looking ahead, I want to continue growing as an engineer and technical leader, deepen my expertise in test automation, 
                        and explore how AI can contribute to innovative engineering solutions.
                        Let's connect!
                    </p>
                </section>
            </section>

            {/* Divider */}
            <hr className="about-divider" />
        </main>
    )
}
