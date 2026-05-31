import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';

function App() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <TrustedBy/>
   </div>
  )
}

export default App
