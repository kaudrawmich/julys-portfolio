/* 
About.jsx: Second page of the Portfolio
*/
import { useState } from 'react'
import { FaGithub, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { SixteenthNotes, Gamepad2, FerrisWheel, Palette, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react'
import { Button } from '../Components/Button.jsx'
import { GlobeIcon } from '../Components/GlobeIcon.jsx'
import me from '../assets/me.png'
import './About.css'


export function About() {
    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide = () => {
        setActiveSlide((prev) => Math.min(prev + 1, 1))
    }
    const previousSlide = () => {
        setActiveSlide((prev) => Math.max(prev - 1, 0))
    }

    console.log('About page rendered...')
    
    return (
        <main className="about">
            {/* Page heading */}
            <header className="about-header">
                <h1>
                    <span className="about-title-text">
                        Welcome to my <span>world</span>
                    </span>
                    <GlobeIcon className="about-globe" size="0.75em" />
                </h1>
            </header>

            {/* Slider */}
            <section className="about-slider">
                <button
                    className="about-arrow"
                    onClick={previousSlide}
                    aria-label="Previous slide"
                    type="button"
                    disabled={activeSlide === 0}
                >
                    <ChevronLeft size={28} />
                </button>

                <div className="about-slide-content">
                    {activeSlide === 0 ? (

                        /* Introduction */
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

                    ) : (

                        /* Beyond Work section */
                        <section className="about-beyond">
                            {/* Personal interests */}
                            <div className="about-beyond-interests">
                                <div>
                                    <h2 className="about-beyond-title">
                                        Beyond work...
                                        <Sparkles size={25} />
                                    </h2>

                                    <div className="about-interests-grid">
                                        <div className="interest-card">
                                            <SixteenthNotes size={40} strokeWidth={1.7} />
                                            <h3>Music</h3>
                                        </div>

                                        <div className="interest-card">
                                            <Palette size={40} strokeWidth={1.7} />
                                            <h3>Arts</h3>
                                        </div>

                                        <div className="interest-card">
                                            <Gamepad2 size={40} strokeWidth={1.7} />
                                            <h3>Gaming</h3>
                                        </div>

                                        <div className="interest-card">
                                            <FerrisWheel size={40} strokeWidth={1.7} />
                                            <h3>Roller coasters</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Personal illustration */}
                            <div className="about-beyond-image">
                                <img src={me} alt="Julia's picture"/>
                            </div>

                            {/*Short description */}
                            <div className="about-beyond-content">
                                <h2 className="about-beyond-subtitle">
                                    A little more about me
                                    <Heart className="about-heart" size={30} />
                                </h2>

                                 <div className="about-beyond-underline" />

                                 <p className="about-interests-description">
                                    When I'm not working on engineering projects, you'll
                                    probably find me drawing, listening to music, playing
                                    videogames, or looking for my next roller coaster adventure.
                                </p>

                                <p className="about-interests-description">
                                    These interests keep me creative, curious, and always
                                    excited to learn something new.
                                 </p>

                                <Sparkles className="about-decoration" size={32} />
                            </div>
                        </section>
                    )}
                </div>

                <button 
                    className="about-arrow"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    type="button"
                    disabled={activeSlide === 1}
                >
                    <ChevronRight size={28} />
                </button>
            </section>

            {/* Pagination dots */}
            <div className="about-pagination" aria-label="Slide position">
                <span className={`about-dot ${activeSlide === 0 ? 'active' : ''}`} />
                <span className={`about-dot ${activeSlide === 1 ? 'active' : ''}`} />
            </div>
        </main>
    )
}
