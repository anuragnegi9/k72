import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Agence from './pages/Agence'
import Home from './pages/Home'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'
import Work from './pages/Work'



const App = () => {
  return (
    <div className='overflow-x-hidden' >

      <Navbar />
      <FullScreenNav />
      <Routes Routes >
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/work' element={<Work />} />
      </Routes >

    </div >
  )
}

export default App