import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';

function App() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <TrustedBy/>
    <Services/>
    <OurWork/>
   </div>
  )
}

export default App
