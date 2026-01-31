import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './App.css'

function App() {
  useEffect(() => {
    // Scroll progress indicator
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress');
      if (scrollProgress) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="app">
      <div className="scroll-progress"></div>
      <div className="grid-lines"></div>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
