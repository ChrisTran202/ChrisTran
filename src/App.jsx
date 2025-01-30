
import './App.css'
import { About }  from './components/About'
import Contact from './components/Contact'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import { Projects } from './components/Projects'
import { Route, Routes } from 'react-router-dom'
import { inject } from '@vercel/analytics';
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

inject();


function App() {
 
  return (
    
      <div>
        {/* vercel analytics */}
        <Analytics/>
        <SpeedInsights/>

        <Navbar />
         <Routes>
          <Route path='/' element={<Intro/>}> </Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
         </Routes>
         
      </div>
  )
}

export default App
