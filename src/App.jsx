import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home.jsx'
import { About } from './Pages/About.jsx'
import { Skills } from './Pages/Skills.jsx'
import { Education } from './Pages/Education.jsx'
import { Projects } from './Pages/Projects.jsx'
import { Contact } from './Pages/Contact.jsx'
import { Layout } from './Layout.jsx'

function App() {

  return (
      <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
