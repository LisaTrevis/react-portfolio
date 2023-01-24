import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import Sidebar from './components/Sidebar'
import Submenu from './components/Submenu'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Work from './pages/Work'
import Recs from './pages/Recs'
import Projects from './pages/Projects'
import Pets from './pages/Pets'
import Daisy from './pages/Daisy'
import Nessa from './pages/Nessa'

import Error from './pages/Error'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <div className='hero-page'>
              <Hero />
            </div>
          </Route>
          <Route path='/about'>
            <div className='about-page'>
              <About />
            </div>
          </Route>
          <Route path='/skills'>
            <div className='skills-page'>
              <Skills />
            </div>
          </Route>
          <Route path='/education'>
            <div className='education-page'>
              <Education />
            </div>
          </Route>
          <Route path='/work'>
            <div className='work-page'>
              <Work />
            </div>
          </Route>
          <Route path='/reviews'>
            <div className='recs-page'>
              <Recs />
            </div>
          </Route>
          <Route path='/projects'>
            <div className='projects-page'>
              <Projects />
            </div>
          </Route>
          <Route path='/pets'>
            <div className='pets-page'>
              <Pets />
            </div>
          </Route>
          <Route path='/daisy'>
            <div className='daisy-page'>
              <Daisy />
            </div>
          </Route>
          <Route path='/nessa'>
            <div className='nessa-page'>
              <Nessa />
            </div>
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Submenu />
      </Router>
    </div>
  )
}

export default App
