import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Works from './components/Works';
import Services from './components/Services';
import About from './components/About';
import Connect from './components/Connect';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';
import './index.css';

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Initialize intersection observer for reveals
  useReveal();

  useEffect(() => {
    if (preloaderDone) {
      // Replicate the original vanilla JS hero enter animation sequence
      document.querySelectorAll('.hero-enter').forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), i * 150);
      });
      
      setTimeout(() => {
        const photoMain = document.querySelector('.photo-main');
        if (photoMain) {
          photoMain.classList.add('slide-right');
        }
      }, 1500);
    }
  }, [preloaderDone]);

  // Handle scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <CustomCursor />
      
      <Navbar />
      <Hero />
      <Marquee />
      <Works />
      <Services />
      <About />
      <Connect />
      <Footer />
    </>
  );
}

export default App;
