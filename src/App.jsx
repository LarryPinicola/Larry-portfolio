import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar'
import Home from './components/HomeSection/Home'
import About from './components/AboutSection/About'
import Services from './components/ServiceSection/Services'
import Works from './components/WorksSection/Works'
import Contact from './components/ContactSection/Contact'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-1'>
        <Home />
        <Services />
        <Works />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App