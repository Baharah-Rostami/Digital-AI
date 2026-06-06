import { useEffect, useRef, useState } from 'react'
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
import ScrollReveal from './animation/ScrollReveal';

function App() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    document.addEventListener("mousemove", handleMouseMove);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`

      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal delay={0}>
        <TrustedBy />
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <Services />
      </ScrollReveal>

      <ScrollReveal delay={500}>
        <OurWork />
      </ScrollReveal>

      <ScrollReveal delay={750}>
        <Teams />
      </ScrollReveal>

      <ScrollReveal delay={1000}>
        <Contact />
      </ScrollReveal>

      <ScrollReveal delay={1250}>
        <Footer />
      </ScrollReveal>

      {/* Custom Cursor Ring */}

      <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-sky-700 pointer-events-none z-9999 "></div>

      <div ref={dotRef} className="fixed top-0 left-0 h-3 w-3 rounded-full bg-sky-700 pointer-events-none z-9999 "></div>

    </div>


  )
}

export default App
