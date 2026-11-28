/* 
Skills.jsx: Third page of the Portfolio
*/
import { CodeXml, Wrench, BrainCircuit, Cpu, Server, FileCodeCorner } from 'lucide-react'
import { SiPython, SiJavascript, SiReact, SiHtml5, SiBamboo, SiSiemens, SiPerforce, SiFastapi, SiPostman, SiVite, SiJupyter, SiPycharm } from 'react-icons/si'
import { FaCss3Alt, FaGitAlt, FaBitbucket } from 'react-icons/fa'
import { VscVscode } from "react-icons/vsc"
import './Skills.css'

/* Technical skills */
const technicalSkills = [
    {
        title: 'Programming Languages',
        icon: CodeXml,
        skills: [
            { name: 'Python', icon: SiPython, color: '#3776AB' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
            { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
        ]
    },

    {
        title: 'Software Testing',
        icon: Wrench,
        skills: [
            { name: 'Manual Testing' },
            { name: 'Test Automation' },
            { name: 'Unit Testing' },
            { name: 'CI/CD' },
            { name: 'Test Design' },
            { name: 'Bamboo', icon: SiBamboo, color: '#1572B6' },
            { name: 'Polarion', icon: SiSiemens, color: '#00CCCC' },
            { name: 'Helix', icon: SiPerforce, color: '#4C00FF' },
        ]
    },

    {
        title: 'Artificial Intelligence',
        icon: BrainCircuit,
        skills: [
            { name: 'Machine Learning' },
            { name: 'Data Science' },
            { name: 'Data Visualization' },
            { name: 'Computer Vision' },
            { name: 'Reinforcement Learning' },
        ]
    },

    {
        title: 'Mathematics & Engineering',
        icon: Cpu,
        skills: [
            { name: 'Linear Algebra' },
            { name: 'Numerical Methods' },
            { name: 'Physics' },
            { name: 'Differential and Integral Calculus' },
            { name: 'Digital Systems' },
            { name: 'Circuits' },
        ]
    },

    {
        title: 'Backend & APIs',
        icon: Server,
        skills: [
            { name: 'Fast API', icon: SiFastapi, color: '#039386' },
            { name: 'REST API' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
            { name: 'Vite', icon: SiVite, color: '#BD34FE' },
        ]
    },

    {
        title: 'Development Tools',
        icon: FileCodeCorner,
        skills: [
            { name: 'Git', icon: FaGitAlt, color: '#F1502F' },
            { name: 'Bitbucket', icon: FaBitbucket, color: '#2684FF' },
            { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
            { name: 'VS Code', icon: VscVscode, color: '#0085D0' },
            { name: 'PyCharm', icon: SiPycharm, color: '#21D789' },
        ]
    },

]


export function Skills() {
    console.log('Skills page rendered...')
    
    return (
        <main className="skills">
            {/* Page heading */}
            <header className="skills-header">
                <h1>
                    <span className="skills-title-text">
                        What I do <span>best</span>
                    </span>
                </h1>
            </header>

            {/* Main Layout */}
            <div className="skills-layout">

                {/* Column #1: "Technical toolbox" */}
                <section className="skills-column">
                    <h2 className="skills-column-title" id="technical-title">
                        Technical toolbox
                    </h2>

                    {/* Scrollable content */}
                    <div className="skills-scroll" tabIndex={0} role="region" aria-labelledby="technical-title">
                        <div className="skills-technical-grid">

                            {/* Technical category cards */}
                            {technicalSkills.map((category) => {
                                const CategoryIcon = category.icon

                                return (
                                    <article className="skills-technical-card" key={category.title}>
                                        <CategoryIcon 
                                            className="skills-category-icon"
                                            size={32}
                                            strokeWidth={1.7}
                                            aria-hidden="true"
                                        />

                                        <h3>{category.title}</h3>

                                        {/* Individual skill tags */}
                                        <div className="skills-tags">
                                            {category.skills.map((skill) => {
                                                const SkillIcon = skill.icon

                                                return (
                                                    <span className="skills-tag" key={skill.name}>
                                                        {SkillIcon && (
                                                            <SkillIcon
                                                                size={18}
                                                                style={{ color: skill.color }}
                                                                aria-hidden="true"
                                                            />
                                                        )}

                                                        {skill.name}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Column #2: "Soft skills" */}
                <section className="skills-column">
                    <h2 className="skills-column-title" id="personal-title">

                    </h2>
                </section>
            </div>
        </main>
    )
}
