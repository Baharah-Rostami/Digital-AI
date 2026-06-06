import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  const [theme, setTheme]= useState(localStorage.getItem('theme')? localStorage.getItem('theme'): 'light')
  return (
   <div>
    <Toaster/>
    <Navbar/>
    <Hero/>
    <TrustedBy/>
    <Services/>
    <OurWork/>
    <Teams/>
    <Contact/>
   </div>
  )
}

export default App
