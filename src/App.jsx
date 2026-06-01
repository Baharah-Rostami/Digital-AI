import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';

function App() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <TrustedBy/>
    <Services/>
   </div>
  )
}

export default App
