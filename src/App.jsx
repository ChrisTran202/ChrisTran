
import './App.css'
import { About } from './components/About'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import { Projects } from './components/Projects'
import SeperatorLine from './components/SeperatorLine'



function App() {
 

  return (
    
    <>
    <div className='relative z-10'>
      
        <Navbar  />
        <Intro />
        <About/>
        <Projects />
        <Contact />
      </div>
    </>
    
  )
}

export default App
