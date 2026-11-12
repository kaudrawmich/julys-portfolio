import { NavLink } from 'react-router-dom'
import kau from '../assets/kau.png'
import './Navbar.css'

export function Navbar() {
    return (
        <nav className="navbar">
            {/* Branding element */}  
            <img src={kau} alt="Julia Pinedo" className="navbar-logo"/>
            
            {/* Functional buttons */}  
            <div className="navbar-links">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}
