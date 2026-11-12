/* 
Home.jsx: First page of the Portfolio
*/
import { Download } from 'lucide-react'
import { Button } from '../Components/Button.jsx'
import './Home.css'

export function Home() {
    console.log('Home page rendered...')
    
    return (
        <main className="home">
            {/* Left section */}
            <section className="home-content">
                <h1> Hi, I'm <span>Julia</span>!</h1>

                <div className="home-titles">
                    <h2>M.Sc. in Applied Artificial Intelligence</h2>
                    <h3>Senior Test Engineer</h3>
                </div>

                <p className="home-description">
                    Welcome to my professional portfolio! Here you'll 
                    find the projects, skills, and experiences that shape my work.
                </p>

                <Button 
                    variant="filled"
                    shape="pill"
                    href="/Julia_Pinedo_CV.pdf"
                    download="Julia_Pinedo_CV.pdf"
                >
                    <Download size={18} />
                    Download CV
                </Button>
            </section>

            {/* Right section */}
            <section className="home-image">
                <img src="julypicture.png" alt="Julia's profile"/>
            </section>
        </main>
    )
}
