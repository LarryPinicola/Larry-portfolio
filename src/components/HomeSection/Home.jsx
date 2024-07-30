import React from 'react'
import "./Home.css"
import Header from '../Header/Header'

const Home = () => {
  return (
    <div id='home' className='h-screen'>
        <Header/>
        <div className="">
            Welcome Home
        </div>
    </div>
  )
}

export default Home