import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<About />} />
            <Route path=':user'element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
