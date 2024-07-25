import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home/Home'
import About from './components/About/About'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <main className='flex-1'>
        <Home />
        <About />
      </main>
    </div>
  )
}

export default App