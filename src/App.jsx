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
import Footer from './components/Footer';

function App() {
  return (
   <div className='dark:bg-black relative'>
    <Toaster/>
    <Navbar/>
    <Hero/>
    <TrustedBy/>
    <Services/>
    <OurWork/>
    <Teams/>
    <Contact/>
    <Footer />
   </div>
  )
}

export default App
