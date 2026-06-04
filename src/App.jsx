import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';

function App() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <TrustedBy/>
    <Services/>
    <OurWork/>
    <Teams/>
   </div>
  )
}

export default App
